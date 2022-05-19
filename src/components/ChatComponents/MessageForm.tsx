import React, { FormEvent, useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

import { PaperPlaneTilt, FireSimple } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth";

type ChatComponentsProps = {
  amountOfAttack: number | undefined;
  roomId: string | undefined;
};

const ChatComponents: React.FC<ChatComponentsProps> = ({
  amountOfAttack,
  roomId,
}) => {
  const [attackHasSend, setAttackHasSend] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { user } = useAuth();

  async function handleAttackChat(event: FormEvent) {
    event.preventDefault();

    if (amountOfAttack) {
      const roomRef = doc(db, "rooms", `${roomId}`);
      await updateDoc(roomRef, {
        amountOfAttack: amountOfAttack + 1,
      });
    }
  }

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    const sendMessage = await addDoc(
      collection(db, "rooms", `${roomId}`, "messages"),
      {
        text: message,
        authorName: user?.name,
        authorMessageId: user?.id,
        zombie: user?.zombie,
      }
    );
  }

  return (
    <div>
      <form className="flex" onSubmit={handleSendMessage}>
        <textarea
          className=" w-full mx-2 p-2 rounded-md text-sm font-bold bg-p-gray  hover:bg-p-white disabled:bg-zinc-400 disabled:placeholder:text-zinc-700 focus:border-p-yellow focus:ring-p-yellow focus:ring-4 ring focus:outline-none resize-none scrollbar-thin  scrollbar-thumb-p-lilac scrollbar-track-transparent "
          placeholder={
            user?.zombie === true
              ? "Zumbis sabem Falar! 🚫"
              : "Digite uma menssagem ✨"
          }
          disabled={user?.zombie === true ? true : false}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        {user?.zombie === true ? (
          <button
            onClick={handleAttackChat}
            className="rounded-md bg-p-lilac w-20 h-20 flex items-center justify-center"
            disabled //attackhasSend
          >
            <FireSimple
              size={32}
              color="#f33e1e"
              weight="bold"
              className="w-10"
            />
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-md bg-p-lilac w-20 h-20 flex items-center justify-center disabled:bg-opacity-60 transition-colors duration-150"
            disabled={message.length === 0}
          >
            <PaperPlaneTilt
              size={32}
              color="#FFD83B"
              weight="bold"
              className="w-10"
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default ChatComponents;
