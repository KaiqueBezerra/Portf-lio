import Header from './Components/Header/Index'
import Footer from './Components/Footer/Index'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main/Index'
import Sobre from './Components/Sobre/Index'
import Contato from './Components/Contato/Index'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
