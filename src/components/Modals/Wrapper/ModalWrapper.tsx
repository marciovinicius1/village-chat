import React from "react";
import CloseModalButton from "./CloseModalButton";

type ModalWrapperProps = {
  ToggleModalFunciton: () => void;
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  ToggleModalFunciton,
}) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div
          className="w-full
     max-w-md transform overflow-hidden py-2 px-4 rounded-md bg-bg-pattern drop-shadow-2xl bg-p-dark bg-center bg-[length:140px] items-center justify-center"
        >
          <header className="top-0 h-full w-full flex justify-end mb-4">
            <CloseModalButton closeFunction={ToggleModalFunciton} />
          </header>
          <div className="w-full h-full bg-p-dark p-4 rounded-md drop-shadow-2xl mb-8">
            {children}
          </div>

          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
