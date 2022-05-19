import React from "react";
// import NavigationChatRoom from "../../components/NavigationChatRoom";
import { useAuth } from "../../hooks/useAuth";
import ChatSection from "../../components/ChatComponents/ChatSection";
import ButtonLogOut from "../../components/Buttons/ButtonLogout";

const ChatRoom: React.FC = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <div className=" h-full min-h-screen bg-p-dark relative">
        {/* <NavigationChatRoom /> */}
        <main className="">
          <section className="w-1/6"></section>
          <section className="w-1/6"></section>
          <ChatSection />
        </main>
        <footer></footer>
      </div>
      <ButtonLogOut />
    </>
  );
};

export default ChatRoom;
