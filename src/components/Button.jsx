import { useState } from "react";
import '../style/Button.css'

//Funzione button che verra richiamata nel momento in cui uso il tag <Button />
function Button({ text, variant, callback }){

    const[count, setCount] = useState(0)

    let clickHandler = function(e){
        console.log(e)
        if(variant !="disabled")
        {
            callback()
        }
    }


    let classRenderer = function(){
        let classes = [
          'Button', variant
        ]
        return classes.join(" ")
    }

    return(
        <div onClick={clickHandler} className={classRenderer()}>
            { text }
        </div>
    )
}

export default Button
