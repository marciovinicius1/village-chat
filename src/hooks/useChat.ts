import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  DocumentData,
} from "firebase/firestore";
import { db } from "../services/firebase";

export function useChat(roomId: string | undefined) {
  const [snapshotMessages, setSnapshotMessages] = useState<DocumentData[]>();

  useEffect(() => {
    const q = query(
      collection(db, "rooms", `${roomId}`, "messages"),
      orderBy("createdAt", "asc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      return setSnapshotMessages(messages);
    });
    return () => {
      unsubscribe();
    };
  }, [roomId]);

  return { snapshotMessages };
}
