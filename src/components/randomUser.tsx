import React, { useState, useEffect } from "react";

type props = {
  index: number;
};

export const RandomUser = (props: props) => {
  const [state, setState] = useState({
    user: {
      picture: "",
      name: "",
      user: "",
      location: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const results = data.results[0];
      setState({
        user: {
          picture: results.picture.medium,
          name: `"${results.name.title}" ${results.name.first} ${results.name.last}`,
          user: `${results.login.username} - ${results.login.password}`,
          location: `${results.location.street.name} ${results.location.street.number} - ${results.location.country}`,
          email: results.email,
          phone: `${results.cell}`,
        },
      });
    };
    getUser();
  }, []);

  const tableBg =
    props.index % 2 === 0
      ? "bg-gray-100 border border-slate-400"
      : "bg-gray-200 border border-slate-400";

  return (
    <>
      <tr>
        <td className={tableBg}>
          <div className="flex justify-center">
            <img
              width={100}
              src={state.user.picture}
              alt={state.user.picture}
            />
          </div>
        </td>
        <td className={tableBg}>
          <div className="flex justify-center">{state.user.name}</div>
        </td>
        <td className={tableBg}>
          <div className="flex justify-center">{state.user.email}</div>
        </td>
        <td className={tableBg}>
          <div className="flex justify-center">{state.user.user}</div>
        </td>
        <td className={tableBg}>
          <div className="flex justify-center">{state.user.location}</div>
        </td>
        <td className={tableBg}>
          <div className="flex justify-center">{state.user.phone}</div>
        </td>
      </tr>
    </>
  );
};
