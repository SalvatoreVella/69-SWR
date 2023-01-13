import React from "react";

export default function Sum({numbers = ["No numbers found"]}) {
    return <h1>The sum is: {numbers.reduce((prev, curr) => prev + curr)}</h1>
}