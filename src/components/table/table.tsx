import { TableRowProps } from "./tableRow";
import { TableRow } from "./tableRow";

export interface tableProps {
  data: Array<TableRowProps>;
}

export const Table = (props: tableProps) => {
  return (
    <>
      {props.data.map((data) => {
        <TableRow name={data.name} amount={data.amount} />;
      })}
    </>
  );
};
