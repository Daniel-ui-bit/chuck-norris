import { useState } from 'react'
import '../style/Title.css'

function Title(props) {

  return (
    <div className="Title">
      <p>{props.children}</p>
    </div>
  )
}

export default Title