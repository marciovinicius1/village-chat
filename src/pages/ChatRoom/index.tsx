import React from "react";

import Header from "../../components/Header/index";
import ChatSection from "../../components/ChatComponents/ChatSection";
import ItemUserList from "../../components/ItemUserList";

import { useChangeStatusUser } from "../../hooks/useChangeStatusUser";
import { useParams } from "react-router-dom";
import { useUserListOnRoom } from "../../hooks/useUserListOnRoom";
import { useRoom } from "../../hooks/useRoom";
import { useAuth } from "../../hooks/useAuth";

import { Activity, ShieldWarning, UserList } from "phosphor-react";

import swordIcon from "../../assets/svg/sword.svg";
import handsIcon from "../../assets/svg/hands.svg";
import vsIcon from "../../assets/svg/vs.svg";

type RoomParams = {
  id: string;
};

const ChatRoom: React.FC = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { user } = useAuth();
  const { updateOnConnect, updateOnDisconnect, updateOnAway } =
    useChangeStatusUser(roomId);

  const { dataUserListOnRoom } = useUserListOnRoom(roomId);
  const { authorId } = useRoom(roomId);
  if (user) {
    updateOnConnect();
    updateOnDisconnect();
    // updateOnAway();
  }

  // console.log(dataUserListOnRoom);

  return (
    <>
      <div className="h-screen min-h-screen flex flex-col bg-p-dark">
        <Header />
        <main className="flex h-screen pt-16">
          <ChatSection />
          <section className=" w-2/6 bg-p-dark hidden lg:flex flex-col gap-2 p-8">
            <div className="bg-p-darkV-600 w-full h-auto shadow-xl rounded-md p-2">
              <span className="font-bold text-xl text-p-white flex gap-2 mb-4">
                <Activity size={28} weight="bold" />
                Detalhes da sala
              </span>

              <div className="mb-2 h-auto w-full bg-p-dark rounded-md p-4">
                <span className="font-bold text-base text-p-gray leading-none">
                  Nome da sala:
                </span>
                <p className="font-bold text-2xl text-p-yellow">
                  Comedores de esfirra.
                </p>
              </div>

              <div className="flex ">
                <div className=" h-20 w-auto p-4 bg-p-dark shadow-md rounded-md self-center flex items-center justify-center text-xl font-bold text-p-white">
                  <img
                    src={swordIcon}
                    alt="Icone espadas representando cavaleiros"
                    className="h-full max-h-10 m-1"
                  />
                  12
                  <img src={vsIcon} className="h-6 mx-2" />
                  4
                  <img
                    src={handsIcon}
                    alt="Icone mãos representando de zumbis"
                    className="h-full max-h-10"
                  />
                </div>

                <div className="flex-col h-20 w-auto p-4  bg-p-dark shadow-md rounded-md self-center ml-2 flex items-center justify-center text-xl font-bold text-p-white">
                  <span className="font-bold text-base text-p-gray leading-none"></span>
                  <div className="flex gap-1.5">
                    <ShieldWarning size={32} weight="bold" />
                    <p className="font-bold text-2xl text-p-yellow">10</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-p-darkV-600 w-full h-full rounded-md shadow-xl p-2 overflow-x-hidden scroll-ml-2 scrollbar-thin scrollbar-thumb-p-lilac scrollbar-track-zinc-700 ">
              <div className="flex justify-between items-center">
                <span className="font-bold text-p-white text-xl flex gap-2 ">
                  <UserList size={28} weight="bold" />
                  Lista de usuários
                </span>
                <div className="bg-p-darkV-500 rounded-md p-2 text-xs font-bold text-p-white">
                  {dataUserListOnRoom?.length}
                </div>
              </div>
              {dataUserListOnRoom?.map((user) => {
                return (
                  <ItemUserList
                    key={user.uid}
                    name={user.name}
                    status={user.status}
                    zombie={user.zombie}
                    uid={user.uid}
                    authorRoomId={authorId}
                  />
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ChatRoom;
