import React from "react";
import Age from "./Age";


export default function Welcome({name = "Gianmai", age}) {

    return (
        <div className="welcome p-4">
                <h1>Hello, {name}!</h1>
                <Age age={age}/>
            </div>
        )
    }
