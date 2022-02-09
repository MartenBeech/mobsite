import { useState, useEffect } from "react";

export interface TableRowProps {
  name: string;
  amount: number;
}

export const TableRow = (props: TableRowProps): JSX.Element => {
  const [state, setState] = useState({ name: "", amount: 0 });

  useEffect(() => {
    setState({ name: props.name, amount: props.amount });
  }, [props]);

  return (
    <div className="flex-row">
      <div className="table-row background-color-gray-light">{`${state.name}`}</div>
      <div className="table-row background-color-gray-light">{`${state.amount}`}</div>
    </div>
  );
};
