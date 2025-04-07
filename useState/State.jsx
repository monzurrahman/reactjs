// State.jsx starts here
import { useState } from "react";
export default function State(){

    let[count, setCount] = useState(0) // initialization 
    let inState=()=> {
        setCount(count += 1);
       // console.log(count);
    }
    return (
        <>
        <h2>Count = {count}</h2>
        <button onClick={inState}>Count increase</button>
        </>
    )
}
// App.jsx starts here
//import { useState } from 'react'

import './App.css'
import State from "./State"
function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is state</h1>
      <State />
    </>
  )
}

export default App
