import { useState, useEffect, createContext } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC_sQeWZUe2YW_jVaaKY71K921-nhnwigA',
  authDomain: 'mealstogo-d0faf.firebaseapp.com',
  projectId: 'mealstogo-d0faf',
  storageBucket: 'mealstogo-d0faf.appspot.com',
  messagingSenderId: '668478484535',
  appId: '1:668478484535:web:7dfb4329bdd8672e444fb2',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //   onAuthStateChanged(auth, (u) => {
  //     console.log('firing onAuthStateChanged');
  //     if (u) {
  //       setUser(u);
  //     }
  //   });

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        console.log(u);
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
