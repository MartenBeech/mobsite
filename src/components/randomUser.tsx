import { useState, useEffect } from "react";

export const RandomUser = () => {
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
          name: `${results.name.title} ${results.name.first} ${results.name.last}`,
          user: `${results.login.username} - ${results.login.password}`,
          location: `${results.location.street.name} ${results.location.street.number} - ${results.location.country}`,
          email: results.email,
          phone: `${results.cell}`,
        },
      });
    };
    getUser();
  }, []);

  return (
    <>
      <tr>
        <td className="border border-slate-300 flex justify-center">
          <img src={state.user.picture} />
        </td>
        <td className="border border-slate-300">
          <div className="flex justify-center">{state.user.name}</div>
        </td>
        <td className="border border-slate-300">
          <div className="flex justify-center">{state.user.email}</div>
        </td>
        <td className="border border-slate-300">
          <div className="flex justify-center">{state.user.user}</div>
        </td>
        <td className="border border-slate-300">
          <div className="flex justify-center">{state.user.location}</div>
        </td>
        <td className="border border-slate-300">
          <div className="flex justify-center">{state.user.phone}</div>
        </td>
      </tr>
    </>
  );
};
