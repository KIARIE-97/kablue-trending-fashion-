import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Newarrivals from './components/Newarrivals'
import Accessories from './components/Accessories'
import Footwear from './components/Footwear'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    
    <Router>
    <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Newarrivals" element={<Newarrivals />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Footwear" element={<Footwear />} />
      </Routes>
      <Footer/>
    </Router> 
    </>
  )

}

export default App
