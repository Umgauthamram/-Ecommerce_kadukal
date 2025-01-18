
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginPage, Signup} from './Components/Routes'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<h1>Hello world</h1>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
