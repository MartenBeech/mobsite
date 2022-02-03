import react, {useState} from "react";

export const Incrementer = () : JSX.Element => {
    const [counter, setCounter] = useState(0);
    interface buttonProps {
        increment: number,
    }
    
    const Button = (props: buttonProps) => {
        return (
            <>
                <button onClick={() => {
                    setCounter(counter + props.increment)
                }}>
                    {`+${props.increment}`}
                </button>
            </>
        )
    }
    
    interface displayProps {
        value: number,
    }
    
    const Display = (props: displayProps) => {
        return (
                <div>
                    {props.value}
                </div>
        )
    }

    return (
        <div>
            <Button {...{increment: 1}}/>
            <Button {...{increment: 5}}/>
            <Button {...{increment: 10}}/>
            <Button {...{increment: 100}}/>
            <Display {...{value: counter}}/>
        </div>
    )
}