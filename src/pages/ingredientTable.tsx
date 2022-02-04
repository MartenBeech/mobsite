import react, { useState, useEffect } from "react";
import "../global.css";
import { Table } from "../components/table/table.tsx";

export interface rowData {
  name: string;
  amount: number;
}

export const IngredientTable = () => {
  const [state, setState] = useState({
    inputName: "",
    inputAmount: "",
    data: [{ name: "", amount: 0 }],
  });

  const tableData: Array<rowData> = [];
  useEffect(() => {
    setState({
      ...state,
      data: tableData,
    });
  }, []);

  const handleInputName = (e: React.FormEvent<HTMLInputElement>) => {
    const newString = e.target.value;

    setState({
      ...state,
      inputName: newString,
    });
  };

  const handleInputAmount = (e: React.FormEvent<HTMLInputElement>) => {
    const newString = e.target.value;

    setState({
      ...state,
      inputAmount: newString,
    });
  };

  const handleClickAdd = (e: React.FormEvent<HTMLButtonElement>) => {
    const addedData: rowData = {
      name: state.inputName,
      amount: parseInt(state.inputAmount, 10),
    };

    const newData = [...state.data, addedData];

    setState({
      ...state,
      inputName: "",
      inputAmount: "",
      data: newData,
    });
  };

  return (
    <>
      <div className="flex-row">
        <input
          className="input"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleInputName(e);
          }}
          value={state.inputName}
        />
        <input
          className="input"
          type={"number"}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleInputAmount(e);
          }}
          value={state.inputAmount}
        />
        <button
          className="button"
          onClick={(e: React.FormEvent<HTMLButtonElement>) => {
            handleClickAdd(e);
          }}
        >
          Add
        </button>
      </div>
      <div className="display-inline-block">
        <Table data={state.data} />
      </div>
    </>
  );
};
