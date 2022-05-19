import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { User } from "../contexts/AuthContext/types";
import { db } from "../services/firebase";
import { useAuth } from "./useAuth";

export type CurrentRoomProps = {
  amountOfAttack: number;
  authorId: string;
  roomName: string;
  users: User[];
};

type RoomParams = {
  id: string;
};

export function useRoom(roomId: string | undefined) {
  const { user } = useAuth();

  const [currentRoom, setCurrentRoom] = useState<CurrentRoomProps>();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "rooms", `${roomId}`),
      (snapshot) => {
        const changes = snapshot.data();
        const parsedChanges = JSON.stringify(changes);
        setCurrentRoom(JSON.parse(parsedChanges));
      }
    );

    return () => {
      unsubscribe();
    };
  }, [roomId]);

  return {
    amountOfAttack: currentRoom?.amountOfAttack,
    authorId: currentRoom?.authorId,
    users: currentRoom?.users,
    roomName: currentRoom?.roomName,
  };
}
