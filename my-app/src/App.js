import React from 'react'
import "./App.css"


const App = () => {
 const hta=(e)=>{
 e.preventDefault()
 console.log(e)
 }

 return (
   
    <div>
      <form onSubmit={(e)=>{
        hta(e)
      }}>
        <input className='hta' placeholder='scerce'></input>
        <button>click</button>
      
      </form>
    </div>
  )
}

export default App




