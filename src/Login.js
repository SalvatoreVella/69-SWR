import React from "react"
import { useInput } from "./useInput"

export default function Login() {
const {state, handleInput, handleLogin} = useInput({
    name: "",
    password: "",
    remember: false
})

    const myStyle = {
        backgroundColor: state.password.length < 8 ? "red" : "green"
    }
        return <div>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" value={state.name} onChange={handleInput}></input>
                <br></br>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" value={state.password} onChange={handleInput}></input>
                <br></br>
                <label htmlFor="remember">Remember </label>
                <input type="checkbox" name="remember" checked={state.remember} onChange={handleInput}></input>
                <br></br>
                <button
                    style={ myStyle}
                    disabled={!state.name || !state.password ? true : false}
                    onClick={() => {handleLogin(state)}}
                >Login</button>
            </div>
        

}