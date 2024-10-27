import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for testing
const MOCK_USERS = {
  'superadmin@amai.com': {
    id: '1',
    name: 'Super Admin',
    email: 'superadmin@amai.com',
    role: 'SUPER_ADMIN',
    plan: 'ENTERPRISE',
  },
  'admin@amai.com': {
    id: '2',
    name: 'Admin User',
    email: 'admin@amai.com',
    role: 'ADMIN',
    plan: 'PREMIUM',
  },
  'user@amai.com': {
    id: '3',
    name: 'Regular User',
    email: 'user@amai.com',
    role: 'USER',
    plan: 'BASIC',
  },
} as const;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(storedUser) });
    }
    dispatch({ type: 'SET_LOADING', payload: false });
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = MOCK_USERS[email as keyof typeof MOCK_USERS];
      if (!user) throw new Error('Invalid credentials');

      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'SET_USER', payload: user });
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

function authReducer(state: AuthState, action: any) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}