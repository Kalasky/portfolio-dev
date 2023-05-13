import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Spotifly from './pages/Spotifly'
import Kolor from './pages/Kolor'
import Pogo from './pages/Pogo'
import MongoDocs from './pages/MongoDocs'
import MainLayout from './MainLayout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spotifly" element={<Spotifly />} />
            <Route path="/kolor" element={<Kolor />} />
            <Route path="/pogo" element={<Pogo />} />
            <Route path="/mongodocs" element={<MongoDocs />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  )
}

export default App
