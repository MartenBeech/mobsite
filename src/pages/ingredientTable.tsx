import React, { useState, useEffect } from "react";
import { Table } from "../components/table/table";

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
    const target = e.target as HTMLInputElement;
    const newString = target.value;

    setState({
      ...state,
      inputName: newString,
    });
  };

  const handleInputAmount = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newString = target.value;

    setState({
      ...state,
      inputAmount: newString,
    });
  };

  const handleClickAdd = () => {
    if (state.inputName && state.inputAmount) {
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
    } else {
      alert("Please fill out both Name and Amount");
    }
  };

  return (
    <div className="flex-column">
      <div className="">
        <input
          className="ml-6 w-36 border"
          type={"text"}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleInputName(e);
          }}
          value={state.inputName}
          placeholder="Name"
        />
        <input
          className="ml-6 w-36 border"
          type={"number"}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            handleInputAmount(e);
          }}
          value={state.inputAmount}
          placeholder="Amount"
        />
        <button
          className="border bg-gray-100 w-20 h-10 mt-5 ml-6"
          onClick={() => {
            handleClickAdd();
          }}
        >
          Add
        </button>
      </div>
      <div className="mt-5">
        <Table data={state.data} />
      </div>
    </div>
  );
};
