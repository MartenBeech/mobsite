import React, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { FiPower } from "react-icons/fi";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

interface props {
  loginName: string;
}

export const Headerbar = (props: props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    username: "",
    userInput: "",
  });

  useEffect(() => {
    setState({
      ...state,
      username: props.loginName,
      userInput: props.loginName,
    });
  }, [props]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onNameChange = (value: string) => {
    setState({ ...state, userInput: value });
  };

  const onNameUpdate = (value: string) => {
    setState({ ...state, username: value });
  };

  return (
    <div className="w-screen">
      <div className="bg-blue-500 w-full h-20 shadow-md">
        <div className="flex-row h-full items-center">
          <div className="flex w-1/6 justify-center">
            <FaUserAlt
              size={30}
              className="cursor-pointer"
              onClick={openModal}
            />
            <div className="ml-2 text-xl">{`${state.username}`}</div>
          </div>
          <div className="flex w-2/3 justify-center">
            <MdNotificationsNone size={30} className="cursor-pointer" />
            <div className="ml-2 text-xl">Notifications</div>
          </div>
          <div className="flex w-1/6 justify-center">
            <FiPower size={30} className="cursor-pointer" />
            <div className="ml-2 text-xl">Log out</div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>
          <div className="w-80">
            <div className="text-xl">{`Hello ${state.username}`}</div>
            <div>Have a good day!</div>
            <div className="mt-8">
              <input
                className="border w-2/3 h-8"
                value={state.userInput}
                onChange={(e) => {
                  onNameChange(e.target.value);
                }}
              ></input>
              <button
                className="border bg-gray-200 ml-4 w-1/4 h-8"
                onClick={() => {
                  onNameUpdate(state.userInput);
                  closeModal();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
