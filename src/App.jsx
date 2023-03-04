import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.css'
import Button from './components/button'


function App() {
  const [count, setCount] = useState(0)

  const [joke, setJoke] = useState("")

  return (
   <div className='App'>
      <h1>Benvenuti</h1>
      <p>Sito chuck</p>
      <div id='contenutoJoke'>
          <button onClick={() => setCount((count) => count+1)}>
            count is {count}
          </button>

          <Button text="Carica battuta" />
          <Button text="Copia" />
      </div>
   </div>
  )
}

//nella righa 21 e 22 ho richiamato 

export default App
