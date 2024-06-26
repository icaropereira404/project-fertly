import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './components/Layout'



function App() {

 

  return (
    <>
      <BrowserRouter>
        
        <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </Layout>
        
      </BrowserRouter>
    </>
  )
}

export default App
