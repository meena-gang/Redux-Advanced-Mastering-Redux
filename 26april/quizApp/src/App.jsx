import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link,Route,Routes} from'react-router-dom'
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import PrivateRoute from './PrivateRoute'

function App() {
  

  return (
    <>
      <div className='navbar'>
        <Link to='/login'>Login</Link>
        <Link to='/quiz'>Quiz</Link>
        <Link to='/result'>Result</Link>
      </div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/quiz' element={
          <PrivateRoute>
          <Quiz/>
          </PrivateRoute>}></Route>
        <Route path='/result' element={<Result/>}></Route>
      </Routes>
      
    </>
  )
}

export default App;
