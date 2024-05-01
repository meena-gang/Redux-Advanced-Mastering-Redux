import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'

function App() {
  const[input, setInput] = useState(1);
  const counter = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <>
      
      <input type='number' onChange={(e) => setInput(e.target.value)}/>
      <button data-testid="addButton" onClick={() => dispatch({type:'ADD',payload:input})}>ADD</button>
      <button data-testid="reduceButton" onClick={() => dispatch({type:'REDUCE',payload:input})}>REDUCE</button>
      <br/>
      <h1>{counter}</h1>
    </>
  )
}

export default App
