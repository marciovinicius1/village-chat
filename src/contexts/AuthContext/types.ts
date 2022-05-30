import { ReactNode } from "react";

export type AuthContextProps = {
  children: ReactNode;
};

export type AuthContextType = {
  user: User | undefined;

  userName: string;
  setUserName: (prop: string) => void;

  userZombie: boolean;
  setUserZombie: (prop: boolean) => void;

  status: string;
  setStatus: (prop: string) => void;

  signIn: () => Promise<void>;

  deleteCurrentUser: () => Promise<void>;
};

export type User = {
  id: string;
  name: string;
  zombie: boolean;
  status: string;
};
