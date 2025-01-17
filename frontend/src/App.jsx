
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login, Signup} from './Components/Routes'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"/> 
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
