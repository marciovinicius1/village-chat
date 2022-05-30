import { ButtonHTMLAttributes } from "react";
import { SignOut } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import useChangeStatusUser from "../../hooks/useChangeStatusUser";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type RoomParams = {
  id: string;
};

export function ButtonLogOut(props: ButtonProps, attRoom: boolean) {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { deleteCurrentUser } = useAuth();
  const navigation = useNavigate();
  const { signOutStatusUser } = useChangeStatusUser(roomId);

  async function handleLogOut() {
    await deleteCurrentUser()
      .then(() => navigation("/"))
      .then(() => signOutStatusUser());
  }

  return (
    <div className=" fixed bottom-4 right-4 md:bottom-8 md:right-8 flex-col items-end">
      <button
        onClick={() => handleLogOut()}
        className=" bg-p-lilac px-4 py-8 h-12 rounded-md shadow-xl text-p-white flex items-center group"
      >
        <SignOut className="h-8 w-8 md:h-10 md:w-10" />
        <span className="text-xl font-bold max-w-0 overflow-hidden group-hover:max-w-xs group-hover:text-p-yellow transition-all duration-500">
          <span className="pl-2"></span>
          Logout
        </span>
      </button>
    </div>
  );
}

export default ButtonLogOut;
