import React, {useRef, useEffect} from "react"

export default function CarDetails(initialData) {
    let modelValue = useRef(null);
    let yearValue = useRef(null);
    let colorValue = useRef(null);

    useEffect(() => {
        modelValue.current.value = initialData.model;
        yearValue.current.value = initialData.year;
        colorValue.current.value = initialData.color;
    }, [initialData])

    return <div>
        <h1>Car Details</h1>
        <form className="flex flex-col w-48">
            <label htmlFor="">Model</label>
            <input ref={modelValue} type="text" name="model"></input>
            <label htmlFor="">Year</label>
            <input ref={yearValue} type="year" name="year"></input>
            <label htmlFor="">Color</label>
            <input ref={colorValue} type="text" name="color"></input>
        </form>
    </div>
}