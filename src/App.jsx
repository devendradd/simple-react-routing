import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home'
import Career from '../components/Career'
import About from '../components/About'
import Contact from '../components/Contact'

function App() {

  return (
    <>
      <div>
        <h1>React Router Example</h1>
        <BrowserRouter>
          <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
            <Link to="/careers" style={{ marginRight: '10px' }}>Careers</Link>
            <Link to="/contact/:userId" style={{ marginRight: '10px' }}>Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/careers" element={<Career/>}></Route>
            <Route path="/contact/:userId" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
