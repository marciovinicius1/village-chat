import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { signInAnonymously } from "firebase/auth";
import { getAuth, deleteUser } from "firebase/auth";

type AuthContextProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | undefined;
  setUser: (value: User) => void;

  userName: string;
  setUserName: (value: string) => void;

  userZombie: boolean;
  setUserZombie: (value: boolean) => void;

  signIn: () => Promise<void>;

  deleteCurrentUser: () => void;
};

type User = {
  id: string;
  name: string;
  zombie: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProps) {
  const [user, setUser] = useState<User | undefined>();
  const [userName, setUserName] = useState<string>("");
  const [userZombie, setUserZombie] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;

        if (!uid) {
          throw new Error("Internal login ERROR!");
        }

        setUser({
          id: uid,
          name: userName,
          zombie: userZombie,
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
        throw new Error("Internal Login Error");
      }
      setUser({
        id: uid,
        name: userName,
        zombie: userZombie,
      });
    }
  }

  function deleteCurrentUser() {
    const currentUser = auth.currentUser;
    currentUser?.delete();
    setUser(undefined);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userName,
        setUserName,
        userZombie,
        setUserZombie,
        signIn,
        deleteCurrentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
