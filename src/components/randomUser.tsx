import { useState, useEffect } from "react";
import "../global.css";

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
          user: `User: ${results.login.username} Pass: ${results.login.password}`,
          location: `${results.location.street.name} ${results.location.street.number} - ${results.location.country}`,
          email: results.email,
          phone: `${results.cell}`,
        },
      });
    };
    getUser();
  }, []);

  return (
    <div className="user-table-row">
      <img className="user-table-element" src={state.user.picture} />
      <div className="user-table-element">{state.user.name}</div>
      <div className="user-table-element">| {state.user.email}</div>
      <div className="user-table-element">| {state.user.user}</div>
      <div className="user-table-element">| {state.user.location}</div>
      <div className="user-table-element">| {state.user.phone}</div>
    </div>
  );
};
