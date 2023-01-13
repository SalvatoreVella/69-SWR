import { useState, useEffect, useCallback} from "react";

export const useCounter = (value) => {
    const [counter, setCounter] = useState(value);

    const onCounterChange = useCallback(function onCounterChange(counter) {
        /* console.log("The current number is " + counter); */
    }, [])

    useEffect(() => onCounterChange(counter), [counter, onCounterChange]);

    const onIncrement = useCallback(function onIncrement(){
        setCounter(pre => pre + 1)
    }, [])

    const onReset = useCallback(function onReset(){
        setCounter(() => value)
    }, [value])
    
    const onDecrement = useCallback(function onDecrement(){
        setCounter(pre => pre - 1)
    }, [])
    return {
        counter: counter,
        onDecrement: onDecrement,
        onIncrement: onIncrement,
        onReset: onReset,
    }
}