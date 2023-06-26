import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
      </BrowserRouter>
    </div>
  )
}
