import react, { useState, useEffect } from "react";
// @ts-ignore
import { TableRowProps } from "./tableRow.tsx";
// @ts-ignore
import { TableRow } from "./tableRow.tsx";

export interface tableProps {
  data: Array<TableRowProps>;
}

export const Table = (props: tableProps): JSX.Element => {
  const [state, setState] = useState({ data: props });

  useEffect(() => {
    setState({ data: props });
  }, [props]);

  return (
    <div>
      <div className="flex-row">
        <div className="table-row background-color-gray-dark">
          {"Ingredient"}
        </div>
        <div className="table-row background-color-gray-dark">
          {"Calories/100g"}
        </div>
      </div>
      {state.data &&
        state.data.data.map((data, index) => {
          return <TableRow key={index} name={data.name} amount={data.amount} />;
        })}
    </div>
  );
};
