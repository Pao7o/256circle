import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  signUp: (email: string, password: string, username: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      signUp: async (email, password, username) => {
        try {
          set({ isLoading: true });
          
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username
              }
            }
          });

          if (error) throw error;

          if (data.user) {
            set({
              user: {
                id: data.user.id,
                email: data.user.email!,
                username
              }
            });
          }

          set({ isLoading: false });
          return { error: null };
        } catch (error) {
          set({ isLoading: false });
          return { error };
        }
      },
      signIn: async (email, password) => {
        try {
          set({ isLoading: true });
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
          });

          if (error) throw error;

          if (data.user) {
            set({
              user: {
                id: data.user.id,
                email: data.user.email!,
                username: data.user.user_metadata.username
              }
            });
          }

          set({ isLoading: false });
          return { error: null };
        } catch (error) {
          set({ isLoading: false });
          return { error };
        }
      },
      signOut: async () => {
        await supabase.auth.signOut();
        set({ user: null });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);