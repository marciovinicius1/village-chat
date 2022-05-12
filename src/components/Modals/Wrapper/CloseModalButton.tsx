import { XSquare } from "phosphor-react";
import React from "react";

type CloseModalButtonProps = {
  closeFunction: () => void;
};

const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  closeFunction,
}) => {
  return (
    <button onClick={closeFunction} className="">
      <XSquare weight="bold" color="#EEEEEE" className="w-6 h-6" />
    </button>
  );
};

export default CloseModalButton;
