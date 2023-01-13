import React from "react"
import { useNavigate } from "react-router-dom"

export default function FormGithubUser() {
    const navigate = useNavigate();
 
  
    const handleUsername = (e) => {
        e.preventDefault();
        navigate("users/" + e.target.username.value)
        
      }

    return(
     <form className="flex flex-col items-center gap-4" onSubmit={handleUsername}>
    <h1>Type a name to see a Github user profile</h1>
    <input type="text" name="username"></input>
    <button type="submit" name="search">Search</button>
  </form>)
}