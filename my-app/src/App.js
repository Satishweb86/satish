import React, { useState } from 'react'
import "./App.css"

const App = () => {
 const[a ,seta] = useState()
 const change = () =>{
seta("suraj")
 }
 const meme = ()=>{
  seta("rahul")
 }

 return (
    <div>
      <h1>satish{a}</h1>
      <button onMouseOver={change}>changea</button>
      <button onMouseOver={meme}>mene</button>
    </div>
  )
}

export default App




