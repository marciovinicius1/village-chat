import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  SetStateAction,
} from "react";
import { auth, db } from "../../services/firebase";
import { signInAnonymously } from "firebase/auth";
import { getAuth, deleteUser } from "firebase/auth";
import { firebase, database } from "../../services/firebase";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { AuthContextType, AuthContextProps, User } from "./types";
import { setUserLocalStorage, getUserLocalStorage } from "./utils";

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
      });

      setUserLocalStorage({
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
