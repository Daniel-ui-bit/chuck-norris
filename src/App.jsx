import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.css'
import Button from './components/Button'
import Dropdown from './components/Dropdown'
import Title from './components/Title'
import Textarea from './components/Textarea'
import Image from './components/Image'

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
    let jokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(jokeText.innerText);
  }

    let url = "https://api.chucknorris.io/jokes/categories"

    fetch(url).then((resp)=>{
      return resp.json()
    }).then(JokeType=>{
      JokeType.unshift("random")
      setCategory(JokeType)
      setCount(1)
    }).catch((e)=>{
    })
  

  return (
   <div className='App'>  
      <div id='contenutoJoke' >
        
          <Title>Joke Chuck Norris</Title>
          <div class="flex">
            <Textarea id="JokeText">{joke}</Textarea>
          </div>
            <Image></Image>
          <div class="flex">
            <Dropdown options={ category } />
          </div>
          <div class="flex">
            <Button text="Carica battuta" variant={"o"} callback={loadJokeCallback} />
          </div>
          <div class="flex">
            <Button text="copia" variant={ joke === "" ? "c disabled":undefined } callback={copyTextCallback} />
          </div>
      </div>
   </div>
  )
}


export default App
