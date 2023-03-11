import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.css'
import Button from './components/button'


function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  let loadJokeCallback = function(){
    console.log("ciao")
    setJoke("testo")
  }

  let copyTextCallback = function(){
    console.log("bye")
  }

  return (
   <div className='App'>
      <h1>Benvenuti</h1>
      <p>Sito chuck</p>
      <div id='contenutoJoke'>
          <button onClick={() => setCount((count) => count+1)}>
            count is {count}
        </button>

          <Button text="Carica battuta" callback={loadJokeCallback} />
          <Button text="Copia" variant={ joke === "" ? "disabled":undefined} callback={copyTextCallback} />
      </div>
   </div>
  )
}

//nella righa 21 e 22 ho richiamato 

export default App
