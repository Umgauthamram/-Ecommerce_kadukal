
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginPage, Signup} from './Components/Routes'
import HomePage from './Components/Homepage/HomePage';
import ProductCard from './Components/Homepage/ProductCard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path='/home' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
