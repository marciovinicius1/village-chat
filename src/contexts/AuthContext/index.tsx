import { createContext, useEffect, useState } from "react";

import { auth, db, firebase } from "../../services/firebase";
import { signInAnonymously, signOut } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import { AuthContextType, AuthContextProps, User } from "./types";
import { setUserLocalStorage, getUserLocalStorage } from "./utils";
import useChangeStatusUser from "../../hooks/useChangeStatusUser";

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProps) {
  const [status, setStatus] = useState<string>("online");
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

        const payload = getUserLocalStorage();
        setUser(payload);
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
        status,
      });

      setUserLocalStorage({
        id: uid,
        name: userName,
        zombie: userZombie,
        status,
      });

      setDoc(doc(db, "users", `${uid}`), {
        uid,
        userName,
        userZombie,
        status,
      });

      const createUserOnRealtimeDatabase = firebase
        .database()
        .ref(`users/${uid}`)
        .set({
          uid,
          userName,
          userZombie,
          status,
        });
    }
  }

  async function deleteCurrentUser() {
    const currentUser = auth.currentUser;
    await signOut(auth);
    currentUser?.delete();
    setUser(undefined);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userName,
        setUserName,
        userZombie,
        setUserZombie,
        status,
        setStatus,
        signIn,
        deleteCurrentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
