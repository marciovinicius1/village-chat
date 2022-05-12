import { ButtonHTMLAttributes } from "react";
import { SignOut } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonLogOut(props: ButtonProps) {
  const { deleteCurrentUser } = useAuth();
  const navigation = useNavigate();

  async function handleLogOut() {
    deleteCurrentUser();
    navigation("/");
  }

  return (
    <div className=" fixed bottom-4 right-4 md:bottom-8 md:right-8  flex flex-col items-end">
      <button
        onClick={handleLogOut}
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
