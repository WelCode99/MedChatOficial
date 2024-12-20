import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../types/auth';

interface AuthContextType extends AuthState {
  register: (data: { name: string; email: string; password: string }) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signInWithEmailAndPassword: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  register: async () => {},
  login: async () => {},
  logout: async () => {},
  signInWithEmailAndPassword: () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: false,
    error: null,
  });
  const navigate = useNavigate();

  const register = useCallback(async (data: { name: string; email: string; password: string }) => {
    setState((prev: AuthState) => ({ ...prev, loading: true, error: null }));
    try {
      // TODO: Implement Firebase registration
      // For now, just simulate a successful registration
      setState((prev: AuthState) => ({
        ...prev,
        loading: false,
        user: {
          id: '1',
          email: data.email,
          name: data.name,
          photoURL: null,
        },
      }));
      navigate('/');
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Erro ao criar conta',
      }));
    }
  }, [navigate]);

  const login = useCallback(async (email: string, _password: string) => {
    setState((prev: AuthState) => ({ ...prev, loading: true, error: null }));
    try {
      // TODO: Implement Firebase login
      setState((prev: AuthState) => ({
        ...prev,
        loading: false,
        user: {
          id: '1',
          email,
          name: 'User',
          photoURL: null,
        },
      }));
      navigate('/');
    } catch (error) {
      setState((prev: AuthState) => ({
        ...prev,
        loading: false,
        error: 'Erro ao fazer login',
      }));
    }
  }, [navigate]);

  const logout = useCallback(async () => {
    setState((prev: AuthState) => ({ ...prev, loading: true, error: null }));
    try {
      // TODO: Implement Firebase logout
      setState((prev: AuthState) => ({
        ...prev,
        loading: false,
        user: null,
      }));
      navigate('/login');
    } catch (error) {
      setState((prev: AuthState) => ({
        ...prev,
        loading: false,
        error: 'Erro ao fazer logout',
      }));
    }
  }, [navigate]);

  function signInWithEmailAndPassword(email: string, password: string) {
    console.log('Signing in with email:', email);
    console.log('Received password:', password); // Now the password is read
    // Implementar lógica de login
  }

  function signOut() {
    // Implementar lógica de logout
  }

  // Verificar se o usuário está autenticado antes de renderizar o chatbot
  return (
    <AuthContext.Provider value={{ ...state, register, login, logout, signInWithEmailAndPassword, signOut }}>
      {state.user ? children : <div>Você precisa estar logado para acessar o chatbot.</div>}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);