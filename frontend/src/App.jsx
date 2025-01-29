
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginPage, Signup} from './Components/Routes'
import HomePage from './Components/Homepage/HomePage';
import ProductForm from './Pages/createproduct';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path='/home' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/product' element={<ProductForm/>} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
