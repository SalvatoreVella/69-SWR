import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ initialValue = 0, increment = 1, interval = 1000 }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        const updateCounter = () => {
            setInterval(() => {
                setCounter(counter => counter + increment)
            }, interval);
            return clearInterval(updateCounter);
        }
        updateCounter()
    }, [initialValue, increment, interval])

    return <CounterDisplay counter={counter} />
}