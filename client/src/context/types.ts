export interface User {
  firstName: string ;
  lastName: string ;
  email: string ;
  password: string ;
  confirmPassword: string ;
}

export interface AuthContextType {
  signUp: (user: User) => void;
  login: (user: { email: string; password: string }) => void;
}
