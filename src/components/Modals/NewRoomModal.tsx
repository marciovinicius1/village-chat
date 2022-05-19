import React, { useState, FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import kingIcon from "../../assets/svg/king.svg";
import { DefaultButton } from "../../components/Buttons/DefaultButton";

import { db } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

const Modals: React.FC = () => {
  const { user, userName, setUserName, signIn } = useAuth();
  const [roomName, setRoomName] = useState<string>("");

  const navigate = useNavigate();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (!user) {
      await signIn();
      return;
    }

    if (roomName.trim() === "") {
      return;
    }

    const roomRef = await addDoc(collection(db, "rooms"), {
      authorId: user.id,
      roomName: roomName,
      amountOfAttack: 0,
      users: [],
    });

    navigate(`/rooms/id/${roomRef.id}`);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={kingIcon} alt="Icone de rei" className="h-20 w-20 mb-6" />
      <form
        onSubmit={handleCreateRoom}
        className=" flex flex-col justify-center items-center"
      >
        <div className="flex flex-col">
          <label className="font-bold text-p-white text-2xl mb-2">
            Nome da Sala
          </label>
          <input
            type="text"
            placeholder="Digite o nome da sala"
            onChange={(event) => setRoomName(event.target.value)}
            value={roomName}
            name="roomname"
            required
            className="mb-6 w-60 h-10 p-2 rounded-md font-medium text-lg focus:border-p-yellow focus:ring-p-lilac focus:ring focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-p-white text-2xl mb-2">
            Seu nome{" "}
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
            name="username"
            required
            className="mb-6 w-60 h-10 p-2 rounded-md font-medium text-lg focus:border-p-yellow focus:ring-p-lilac focus:ring focus:outline-none"
          />
        </div>
        <DefaultButton type="submit">Criar sala</DefaultButton>
      </form>
    </div>
  );
};

export default Modals;
