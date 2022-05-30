import React, { useEffect } from "react";
import Header from "../../components/Header/index";
import { useAuth } from "../../hooks/useAuth";
import ChatSection from "../../components/ChatComponents/ChatSection";
import ButtonLogOut from "../../components/Buttons/ButtonLogout";
import useChangeStatusUser from "../../hooks/useChangeStatusUser";
import { useParams } from "react-router-dom";

type RoomParams = {
  id: string;
};

const ChatRoom: React.FC = () => {
  // const params = useParams<RoomParams>();
  // const roomId = params.id;
  // const { user } = useAuth();
  // const { updateOnConnect, updateOnDisconnect, updateOnAway } =
  //   useChangeStatusUser(roomId);

  // if (user) {
  //   updateOnConnect();
  //   updateOnDisconnect();
  //   updateOnAway();
  // } --------------------------- causando erro de memory leak

  return (
    <>
      <div className="h-full min-h-screen bg-p-dark">
        <Header />
        <main className="h-screen relative ">
          {/* <section className="w-1/6"></section>
          <section className="w-1/6"></section> */}
          <ChatSection />
        </main>
      </div>
      <ButtonLogOut />
    </>
  );
};

export default ChatRoom;
