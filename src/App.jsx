import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Spotifly from './pages/Spotifly'
import Kolor from './pages/Kolor'
import MongoDocs from './pages/MongoDocs'
import Aitinerary from './pages/Aitinerary'
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
            <Route path="/mongodocs" element={<MongoDocs />} />
            <Route path="/aitinerary" element={<Aitinerary />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  )
}

export default App
