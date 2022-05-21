import React from "react";

type MainMessageProps = {
  message: string;
  date?: Date;
};

const MainMessage: React.FC<MainMessageProps> = (props) => {
  const { message, date } = props;

  return (
    <div className="bg-p-purple rounded-md m-4 px-2 py-1 w-fit">
      <h1 className="font-bold text-p-white p-2">{`"${message}"`}</h1>
      <p>{date}</p>
    </div>
  );
};

export default MainMessage;
