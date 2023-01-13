import { useState } from "react"

export const useInput = (value) => {
    const [state, setState ] = useState(value);

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setState(prev => {
            return { 
                ...prev,
                [name]: value }
        })
    }

    function handleLogin(state) {
        let loginIfos = {...state};
        setState(() => {
            return {
                name: "",
                password: "",
                remember: false
            }
        })
        console.log(loginIfos);
    }

    return {state: state, handleInput: handleInput, handleLogin: handleLogin}
}