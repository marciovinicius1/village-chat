import { Dialog } from "@headlessui/react";
import React from "react";
import ModalWrapper from "./Wrapper/ModalWrapper";
import { useUserListOnRoom } from "../../hooks/useUserListOnRoom";
import { useParams } from "react-router-dom";
import ItemUserList from "../ItemUserList";
import { useRoom } from "../../hooks/useRoom";

// import { Container } from './styles';

type UserListOnRoomModalProps = {
  isUserListModalOpenState: boolean;
  setIsUserListModalOpenFunction: () => void;
};

const UserListOnRoomModal: React.FC<UserListOnRoomModalProps> = ({
  isUserListModalOpenState,
  setIsUserListModalOpenFunction,
}) => {
  const param = useParams();
  const roomId = param.id;
  const { authorId } = useRoom(roomId);
  const { dataUserListOnRoom } = useUserListOnRoom(roomId);

  return (
    <>
      <Dialog
        open={isUserListModalOpenState}
        onClose={setIsUserListModalOpenFunction}
      >
        <Dialog.Panel>
          <button
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={setIsUserListModalOpenFunction}
          />
          <ModalWrapper ToggleModalFunciton={setIsUserListModalOpenFunction}>
            <h1 className="text-2xl font-bold text-p-gray mb-2">
              Lista de usuários
            </h1>
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
          </ModalWrapper>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default UserListOnRoomModal;
