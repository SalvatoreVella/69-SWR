import React from "react"
import Login from "./Login"

export default class Container extends React.Component {
    render() {
        return (
            <div className="bg-cyan-100 border border-red-500 m-5 p-6">
                <Login />
            </div>
        )
    }
}