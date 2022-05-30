import React from "react";

type MainMessageProps = {
  message: string;
  date?: Date;
};

const MainMessage: React.FC<MainMessageProps> = (props) => {
  const { message, date } = props;

  return (
    <div className="flex justify-end gap-4 bg-red">
      <div className="bg-p-purple rounded-md my-2 px-2 py-1 w-fit max-w-full mr-2">
        <h1 className="font-bold text-p-white p-2 max-w-full w-full break-words">{`"${message}"`}</h1>
      </div>
    </div>
  );
};

export default MainMessage;
