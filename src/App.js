import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasaphoto" element={<NasaPhoto />} />
      </Routes>

    </div>
  )
}

export default App
