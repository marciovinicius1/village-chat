import React, { useState, useEffect } from "react";
import ButtonChatList from "../Buttons/ButtonChatList";
import { useParams } from "react-router-dom";

import { db } from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import ButtonLogOut from "../Buttons/ButtonLogout";

import ModalWrapper from "./Wrapper/ModalWrapper";
import { Dialog } from "@headlessui/react";

import { useAuth } from "../../hooks/useAuth";

type ChatProps = {
  id: string;
  roomName: string;
};

type RoomParams = {
  id: string;
};

type SelectChatRoomModalProps = {
  isChatListModalOpenState: boolean;
  setIsChatListModalOpenFunction: () => void;
};

const SelectChatRoomModal: React.FC<SelectChatRoomModalProps> = ({
  isChatListModalOpenState,
  setIsChatListModalOpenFunction,
}) => {
  const { user } = useAuth();
  const [chats, setChats] = useState<ChatProps[]>([]);
  const params = useParams<RoomParams>();
  const roomId = params.id;

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rooms"), (snapshot) => {
      const changes = snapshot.docChanges();

      const allRooms = changes.map((data) => {
        return { id: data.doc.id, value: data.doc.data() };
      });

      const parsedRooms = allRooms.map(({ id, value }) => {
        return {
          id: id,
          roomName: value.roomName,
        };
      });

      setChats(parsedRooms);
    });

    return () => {
      unsubscribe();
    };
  }, [roomId]);

  return (
    <>
      <Dialog
        open={isChatListModalOpenState}
        onClose={setIsChatListModalOpenFunction}
      >
        <Dialog.Panel>
          <button
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={setIsChatListModalOpenFunction}
          />
          <ModalWrapper ToggleModalFunciton={setIsChatListModalOpenFunction}>
            <h1 className="text-2xl font-bold text-p-white mb-2">
              Selecione uma sala:
            </h1>
            <div>
              <div className="max-h-96 overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-p-lilac scrollbar-track-zinc-700  ">
                {chats.map((chat) => {
                  return (
                    <ButtonChatList
                      key={chat.id}
                      title={chat.roomName}
                      id={chat.id}
                    />
                  );
                })}
              </div>
            </div>
          </ModalWrapper>
        </Dialog.Panel>
      </Dialog>
      <ButtonLogOut />
    </>
  );
};

export default SelectChatRoomModal;
