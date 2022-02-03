export interface TableRowProps {
    name: string,
    amount: number,
}

export const TableRow = (props: TableRowProps) => {
    return (
    <>
        <div>
            {props.name}
            <div>
                {props.amount}
            </div>
        </div>
    </>
    )
}