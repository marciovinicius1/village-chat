import React, { FormEvent } from "react";
import { DefaultButton } from "../Buttons/DefaultButton";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Switch } from "@headlessui/react";

import zombieIcon from "../../assets/svg/zombie.svg";
import knightIcon from "../../assets/svg/knight.svg";

type CreateUserModalProps = {
  navigateToSelectChatList: () => void;
};

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  navigateToSelectChatList,
}) => {
  const { user, userName, setUserName, userZombie, setUserZombie, signIn } =
    useAuth();

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (userName.trim() === "") {
      return;
    }

    if (!user) {
      await signIn().then(navigateToSelectChatList);
    } else {
      console.log(user);
      navigateToSelectChatList();
    }
  }

  return (
    <div>
      <div>
        <form
          onSubmit={navigateToSelectChatList}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col">
            <label className="font-bold text-p-white text-2xl mb-2">
              Nome de usuário
            </label>
            <input
              type="text"
              placeholder="Digite o nome seu nome"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
              name="username"
              required
              className="mb-6 w-60 h-10 p-2 rounded-md font-medium text-lg focus:border-p-yellow focus:ring-p-lilac focus:ring focus:outline-none"
            />
          </div>
          <div>
            <label className="font-bold text-p-white text-2xl mb-2">
              Escolha seu lado
            </label>
            <div className="py-12 flex items-center gap-4">
              <img
                src={knightIcon}
                alt="Icone de cavaleiro"
                className="h-20 w-20 mb-6"
              />
              <Switch
                checked={userZombie}
                onChange={setUserZombie}
                className={`${userZombie ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 mb-5 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${userZombie ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              <img
                src={zombieIcon}
                alt="Icone de zumbi"
                className="h-20 w-20 mb-6"
              />
            </div>
          </div>
          <DefaultButton type="submit" onClick={handleCreateUser}>
            Entrar em uma sala
          </DefaultButton>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;
