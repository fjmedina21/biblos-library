export interface User {
  uId?: number
  firstName: string;
  lastName: string;
  email: string;
  isAdmin?: boolean;
  password: string;
  confirmPassword: string;
}

export interface AuthContextType {
  signUp: (user: User) => void;
  login: (user: { email: string; password: string }) => void;
  currentUser: User;
  logged: boolean;
  logout: () => void;
  ok: boolean;
  okSignUp: boolean;
  logging: boolean;
error: string;
setError: React.Dispatch<React.SetStateAction<string>>
  
}
