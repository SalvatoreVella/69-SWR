import React, {useState, useContext} from "react"
import { LanguageContext } from "./LanguageContext"

export default function DisplayLanguage() {
    const [state] = useState({
        traslation: {
            en: "The current language is English",
            it: "La lingua corrente è Italiano"
          }})
        const language = useContext(LanguageContext);

    return <h1>{state.traslation[language]}</h1>
}