"use client";

/* Vendors */
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

import { onAuthStateChanged, User } from "firebase/auth";
import { firebaseAuth } from "@/app/config/firebase";

export interface AuthContextType {
  currentUser: User | null;
  userLoggedIn: boolean;
  accessToken: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  async function initializeUser(user: User | null) {
    if (user) {
      const token = await user.getIdToken();
      setAccessToken(token);
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setAccessToken("");
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, initializeUser);
    return unsubscribe;
  }, []);

  const authValue: AuthContextType = {
    currentUser,
    userLoggedIn,
    accessToken,
  };

  /* TODO: Handling of case when loading persists is needed, z.B. when no wifi error happens */
  return <AuthContext.Provider value={authValue}>{!loading && children}</AuthContext.Provider>;
}
