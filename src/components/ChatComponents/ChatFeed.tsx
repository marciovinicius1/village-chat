import React, { useEffect, useRef } from "react";
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

  const messageEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [snapshotMessages]);

  return (
    <div className="h-full scroll-smooth px-4 py-2 mb-2 overflow-x-hidden scroll-ml-2 scrollbar-thin scrollbar-thumb-p-lilac scrollbar-track-zinc-700">
      {snapshotMessages?.map((msg, index) => {
        const { authorMessageId, authorName, text } = msg;
        if (authorMessageId == user?.id) {
          return <MainMessage key={index} message={text} />;
        } else {
          return (
            <OtherUsersMessage
              key={index}
              message={text}
              authorName={authorName}
              adminId={adminId}
            />
          );
        }
      })}

      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatFeed;
