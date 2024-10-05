import { useState } from 'react'


function App() {

  let [counter , setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
   
  }

  const minusValue = () => {
    setCounter(counter-1)
  }

  if(counter > 20){
    alert("Value cannot go above 20")
  }

  else if(counter < 0){
    alert("Value cannot go below")
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value : {counter}</h2>

    <button
    onClick={addValue}
    >Add value : {counter}</button>
    <br/>
    <button
    onClick={minusValue}
    >Remove value :{counter}</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
