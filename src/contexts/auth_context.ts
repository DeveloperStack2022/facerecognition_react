import { createContext } from "react";

type User = {
  email: string;
  password: string;
};

export interface AuthContextInterface {
  checkingSession: boolean;
  isAuthenticated: boolean;
  loading: boolean;
  error?: {
    message: string;
    success: boolean;
  };
  login: (params: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  checkingSession: false,
  isAuthenticated: false,
  loading: true,
  error: {
    message: "",
    success: false,
  },
  login: () => {},
  logout: () => {},
});
