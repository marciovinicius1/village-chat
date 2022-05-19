import { ReactNode, SetStateAction } from "react";

export type AuthContextProps = {
  children: ReactNode;
};

export type AuthContextType = {
  user: User | undefined;

  userName: string;
  setUserName: (prop: string) => void;

  userZombie: boolean;
  setUserZombie: (prop: boolean) => void;

  signIn: () => Promise<void>;

  deleteCurrentUser: () => void;
};

export type User = {
  id: string;
  name: string;
  zombie: boolean;
};
