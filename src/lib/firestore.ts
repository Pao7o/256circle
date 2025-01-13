import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where 
} from 'firebase/firestore';
import { firestore } from './firebase';

interface User {
  id?: string;
  username: string;
  email: string;
  createdAt: Date;
}

export const useUserFirestore = () => {
  const usersRef = collection(firestore, 'users');

  // Créer un utilisateur
  const createUser = async (userData: Omit<User, 'id'>) => {
    try {
      const docRef = await addDoc(usersRef, userData);
      return { ...userData, id: docRef.id };
    } catch (error) {
      console.error("Erreur création utilisateur", error);
      throw error;
    }
  };

  // Récupérer tous les utilisateurs
  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(usersRef);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as User));
    } catch (error) {
      console.error("Erreur récupération utilisateurs", error);
      throw error;
    }
  };

  // Rechercher un utilisateur par email
  const getUserByEmail = async (email: string) => {
    try {
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as User))[0];
    } catch (error) {
      console.error("Erreur recherche utilisateur", error);
      throw error;
    }
  };

  // Mettre à jour un utilisateur
  const updateUser = async (userId: string, userData: Partial<User>) => {
    try {
      const userDoc = doc(firestore, 'users', userId);
      await updateDoc(userDoc, userData);
      return { id: userId, ...userData };
    } catch (error) {
      console.error("Erreur mise à jour utilisateur", error);
      throw error;
    }
  };

  // Supprimer un utilisateur
  const deleteUser = async (userId: string) => {
    try {
      const userDoc = doc(firestore, 'users', userId);
      await deleteDoc(userDoc);
      return userId;
    } catch (error) {
      console.error("Erreur suppression utilisateur", error);
      throw error;
    }
  };

  return {
    createUser,
    getUsers,
    getUserByEmail,
    updateUser,
    deleteUser
  };
};
