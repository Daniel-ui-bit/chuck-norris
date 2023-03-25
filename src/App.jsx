import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.css'
import Button from './components/Button'
import Dropdown from './components/Dropdown'


function App() {
  const [category, setCategory] = useState([])
  const [joke, setJoke] = useState("")

  let loadJokeCallback = function(){
    
    let cat = document.getElementById("JokeType").value
    let url2 = "https://api.chucknorris.io/jokes/random" + (cat!=="random" ? "?category=" + cat : "")
    
    fetch(url2).then((resp)=>{
      return resp.json()
    }).then(JokeType=>{
      setJoke(JokeType.value)
    }).catch((e)=>{
    })

  }

  let copyTextCallback = function(){
    console.log("bye")
  }

    let url = "https://api.chucknorris.io/jokes/categories"

    fetch(url).then((resp)=>{
      return resp.json()
    }).then(JokeType=>{
      JokeType.unshift("random")
      setCategory(JokeType)
    }).catch((e)=>{
    })
    

  return (
   <div className='App'>
      <h1>Benvenuti</h1>
      <p>Sito chuck</p>
      <div id='contenutoJoke'>
          <p>{joke}</p>
          <Dropdown options={ category }/>
          <Button text="Carica battuta" callback={loadJokeCallback} />
          <Button text="Copia" variant={ joke === "" ? "disabled":undefined} callback={copyTextCallback} />
      </div>
   </div>
  )
}


export default App
