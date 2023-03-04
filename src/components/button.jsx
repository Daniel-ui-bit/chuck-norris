import { useState } from "react";
import '../style/Button.css'

//Funzione button che verra richiamata nel momento in cui uso il tag <Button />
function Button({ text }){
    return(
        <div className="Button">
            { text }
        </div>
    )
}

export default Button