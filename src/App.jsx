import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Spotifly from './pages/Spotifly'
import Kolor from './pages/Kolor'
import Pogo from './pages/Pogo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spotifly" element={<Spotifly />} />
          <Route path="/kolor" element={<Kolor />} />
          <Route path="/pogo" element={<Pogo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
