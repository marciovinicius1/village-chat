import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { signInAnonymously } from 'firebase/auth';

type AuthContextProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | undefined;
  setUser: (value: User) => void;

  userName: string;
  setUserName: (value: string) => void;

  userTeam: boolean;
  setUserTeam: (value: boolean) => void;

  signIn: () => Promise<void>;
};

type User = {
  id: string;
  name: string;
  team: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProps) {
  const [user, setUser] = useState<User>();
  const [userName, setUserName] = useState<string>('');
  const [userTeam, setUserTeam] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;

        if (!uid) {
          throw new Error('Internal login ERROR!');
        }

        setUser({
          id: uid,
          name: userName,
          team: userTeam,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signIn() {
    const result = await signInAnonymously(auth);

    if (result.user) {
      const { uid } = result.user;

      if (!uid) {
        throw new Error('Internal Login Error');
      }
      setUser({
        id: uid,
        name: userName,
        team: userTeam,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userName,
        setUserName,
        userTeam,
        setUserTeam,
        signIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}