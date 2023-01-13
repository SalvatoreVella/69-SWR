import { useCounter } from "./useCounter";

export default function ClickCounter({value}) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(value);
    return <div>
        <h1>{counter}</h1>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onIncrement}>Increment</button>
    </div>
}