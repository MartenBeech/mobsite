import { FaUserAlt } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { FiPower } from "react-icons/fi";

export const Headerbar = () => {
  return (
    <div className="w-screen">
      <div className="bg-blue-500 w-full h-20 shadow-md">
        <div className="flex-row h-full items-center">
          <div className="flex w-1/6 justify-center">
            <FaUserAlt size={30} />
            <div className="ml-2 text-xl">Mr. Userman</div>
          </div>
          <div className="flex w-2/3 justify-center">
            <MdNotificationsNone size={30} />
            <div className="ml-2 text-xl">Notifications</div>
          </div>
          <div className="flex w-1/6 justify-center">
            <FiPower size={30} />
            <div className="ml-2 text-xl">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};
