export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'USER';
export type PlanType = 'BASIC' | 'PREMIUM' | 'ENTERPRISE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  plan: PlanType;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}