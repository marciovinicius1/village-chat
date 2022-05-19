import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Dialog, Transition } from "@headlessui/react";

import swordIcon from "../../assets/svg/sword.svg";

import CreateUserModal from "../../components/Modals/CreateUserModal";
import ModalWrapper from "../../components/Modals/Wrapper/ModalWrapper";
import SelectChatRoomModal from "../Modals/SelectChatRoomModal";

const ButtonCreateRoom: React.FC = () => {
  const { user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isChatListModalOpen, setIsChatListModalOpen] =
    useState<boolean>(false);

  function toggleChatListModal() {
    setIsChatListModalOpen(!isChatListModalOpen);
    setIsModalOpen(false);
  }

  function closeModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleJoinRoom() {
    if (!user) {
      setIsModalOpen(!isModalOpen);
    } else {
      setIsChatListModalOpen(true);
    }
  }

  return (
    <>
      <button
        onClick={handleJoinRoom}
        className="bg-p-dark lg:bg-p-lilac h-12 w-52 lg:h-16 lg:w-58 lg:text-xl text-p-gray shadow-xl rounded-md font-bold border-2 border-transparent hover:border-p-yellow focus:border-p-yellow focus:outline-none hover:text-p-yellow focus:text-p-yellow transition-colors flex items-center justify-center gap-2 group"
      >
        <img
          src={swordIcon}
          className="h-8 md:h-10 w-auto group-hover:h-12 ease-in-out duration-300"
        />
        <span>Entre na sala</span>
      </button>

      <Dialog open={isModalOpen} onClose={handleJoinRoom}>
        <Dialog.Panel>
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={closeModal}
          />
          <ModalWrapper ToggleModalFunciton={closeModal}>
            <CreateUserModal navigateToSelectChatList={toggleChatListModal} />
          </ModalWrapper>
        </Dialog.Panel>
      </Dialog>

      <SelectChatRoomModal
        isChatListModalOpenState={isChatListModalOpen}
        setIsChatListModalOpenFunction={toggleChatListModal}
      />
    </>
  );
};
export default ButtonCreateRoom;
