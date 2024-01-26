//import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BiodataForm from './BiodataForm'

function App(){

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element= {<Login/> }></Route>
      <Route path='/home' element= {<BiodataForm/> }></Route>

      </Routes></BrowserRouter>
  )
}
export default App
