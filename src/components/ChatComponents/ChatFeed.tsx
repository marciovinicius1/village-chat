import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useChat } from "../../hooks/useChat";
import MainMessage from "./MainMessage";
import OtherUsersMessage from "./OtherUsersMessage";

type ChatFeedProps = {
  roomId: string | undefined;
  adminId: string | undefined;
};

const ChatFeed: React.FC<ChatFeedProps> = (props) => {
  const { roomId, adminId } = props;
  const { snapshotMessages } = useChat(roomId);
  const { user } = useAuth();

  return (
    <div>
      {snapshotMessages?.map((msg) => {
        const { id, authorMessageId, authorName, text } = msg;

        if (user?.id == authorMessageId) {
          return <MainMessage key={id} message={text} />;
        } else {
          <OtherUsersMessage
            message="Parabéns amigo voce e mto legal"
            authorName={authorName}
            adminId={adminId}
          />;
        }
      })}
    </div>
  );
};

export default ChatFeed;
