import { useState } from 'react'
import '../style/Textarea.css'

function Textarea(props) {

  return (
    <div className="Textarea">
        <p id={props.id}>{props.children}</p>
    </div>
  )
}

export default Textarea