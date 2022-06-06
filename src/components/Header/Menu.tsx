import * as React from "react";
import { useState } from "react";

import { Menu } from "@headlessui/react";

import { List, Users, Chats, SignOut, Activity } from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";

import SelectChatRoomModal from "../Modals/SelectChatRoomModal";
import UserListOnRoomModal from "../Modals/UserListOnRoomModal";

type RoomParams = {
  id: string;
};

const NavigationChatRoom: React.FC = () => {
  const { deleteCurrentUser } = useAuth();
  const navigation = useNavigate();
  const [isChatListModalOpen, setIsChatListModalOpen] =
    useState<boolean>(false);

  const [isUserListModalOpen, setIsUserListModalOpen] =
    useState<boolean>(false);

  const param = useParams<RoomParams>();
  const roomId = param.id;

  function toggleChatListModal() {
    setIsChatListModalOpen(!isChatListModalOpen);
  }

  function toggleUserListModal() {
    setIsUserListModalOpen(!isUserListModalOpen);
  }

  function handleLogOut() {
    deleteCurrentUser(roomId);
    navigation("/");
  }

  return (
    <div className="absolute right-0 z-10 mt-4 mr-4 lg:hidden">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button>
            <List weight="bold" size={32} color="#FFD83B" />
          </Menu.Button>
        </div>
        <Menu.Items
          as="section"
          className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-p-dark shadow-lg ring-4 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="p-1 flex flex-col gap-1">
            <Menu.Item>
              <button className="bg-p-lilac rounded-md p-2 flex justify-center gap-2 font-bold text-p-white group hover:opacity-100 hover:text-p-yellow  focus:text-p-yellow">
                <Activity weight="bold" size={20} color="#FFD83B" />
                Detalhes da sala
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={toggleUserListModal}
                className="bg-p-lilac rounded-md p-2 flex justify-center gap-2 font-bold text-p-white group hover:opacity-100 hover:text-p-yellow focus:opacity-100 focus:text-p-yellow"
              >
                <Users weight="bold" size={20} color="#FFD83B" />
                Usuários na sala
              </button>
            </Menu.Item>

            <Menu.Item>
              <button
                onClick={toggleChatListModal}
                className="bg-p-lilac rounded-md p-2 flex justify-center gap-2 font-bold text-p-white group hover:opacity-100 hover:text-p-yellow focus:opacity-100 focus:text-p-yellow"
              >
                <Chats weight="bold" size={20} color="#FFD83B" />
                Mudar de sala
              </button>
            </Menu.Item>

            <Menu.Item>
              <button
                onClick={handleLogOut}
                className="bg-p-lilac rounded-md p-2 flex justify-center gap-2 font-bold text-p-white group hover:opacity-100 hover:text-p-yellow focus:opacity-100 focus:text-p-yellow"
              >
                <SignOut weight="bold" size={20} color="#FFD83B" />
                Sair
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>

      <SelectChatRoomModal
        isChatListModalOpenState={isChatListModalOpen}
        setIsChatListModalOpenFunction={toggleChatListModal}
      />
      <UserListOnRoomModal
        isUserListModalOpenState={isUserListModalOpen}
        setIsUserListModalOpenFunction={toggleUserListModal}
      />
    </div>
  );
};

export default NavigationChatRoom;
