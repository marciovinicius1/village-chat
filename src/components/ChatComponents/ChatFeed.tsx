import React from "react";
import MainMessage from "./MainMessage";
import MessageForm from "./MessageForm";
// import { Container } from './styles';

type ChatFeedProps = {
  chats: string;
  activeChat: string;
  userName: string;
  Messages: string;
};

const ChatFeed: React.FC<ChatFeedProps> = (props) => {
  const { chats, activeChat, userName, Messages } = props;

  return <div />;
};

export default ChatFeed;
