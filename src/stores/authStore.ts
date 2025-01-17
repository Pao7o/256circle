import { create } from 'zustand';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  User as FirebaseUser
} from 'firebase/auth';
import { auth, firestore } from '../lib/firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

interface AuthState {
  user: (FirebaseUser & { username?: string }) | null;
  isLoading: boolean;
  error: string | null;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  
  signUp: async (email, password, username) => {
    set({ isLoading: true, error: null });
    try {
      // Créer l'utilisateur avec Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Créer un document utilisateur dans Firestore
      await setDoc(doc(firestore, 'users', firebaseUser.uid), {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        username: username,
        createdAt: new Date(),
        lastLogin: new Date()
      });

      set({ 
        user: { ...firebaseUser, username }, 
        isLoading: false, 
        error: null 
      });
    } catch (error: any) {
      set({ 
        user: null, 
        isLoading: false, 
        error: error.message 
      });
      throw error;
    }
  },
  
  signIn: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Mettre à jour la dernière connexion
      await setDoc(doc(firestore, 'users', userCredential.user.uid), 
        { lastLogin: new Date() }, 
        { merge: true }
      );

      set({ 
        user: { ...userCredential.user }, 
        isLoading: false, 
        error: null 
      });
    } catch (error: any) {
      set({ 
        user: null, 
        isLoading: false, 
        error: error.message 
      });
      throw error;
    }
  },
  
  signOut: async () => {
    set({ isLoading: true, error: null });
    try {
      await firebaseSignOut(auth);
      set({ 
        user: null, 
        isLoading: false, 
        error: null 
      });
    } catch (error: any) {
      set({ 
        error: error.message, 
        isLoading: false 
      });
      throw error;
    }
  }
}));