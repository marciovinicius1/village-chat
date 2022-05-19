import mvIcon from "../../assets/svg/mv.svg";
import { useAuth } from "../../hooks/useAuth";

export function ButtonCredits() {
  const { user } = useAuth();

  function handleUser() {
    console.log(user);
  }

  return (
    <div className=" fixed bottom-4 right-4 md:bottom-8 md:right-8  flex flex-col items-end">
      <button
        onClick={handleUser}
        className=" bg-p-lilac px-4 py-8 h-12 rounded-md shadow-xl text-p-white flex items-center group"
      >
        <img src={mvIcon} className="h-8" />
        <span className="text-xl font-bold max-w-0 overflow-hidden group-hover:max-w-xs group-hover:text-p-yellow transition-all duration-500">
          <span className="pl-2"></span>
          Credits
        </span>
      </button>
    </div>
  );
}
