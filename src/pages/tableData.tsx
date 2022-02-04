import react, { useState, useEffect } from "react";
import "../global.css";
import { Table } from "../components/table/table";

export interface tableData {
  data: Array<{
    name: string;
    value: number;
  }>;
}

export const TableData = () => {
  const [state, setState] = useState({
    data: { name: "", value: 0 },
  });

  const data: tableData = {
    data: [
      {
        name: "111",
        value: 1,
      },
      {
        name: "222",
        value: 2,
      },
      {
        name: "333",
        value: 3,
      },
    ],
  };

  useEffect(() => {
    setState({
      data: { name: "", value: 0 },
    });
  }, []);

  return (
    <>
      <div className="background-color-gray"></div>
    </>
  );
};
