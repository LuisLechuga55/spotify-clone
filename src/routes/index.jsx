import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarSide from '../components/NavbarSide'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import SingleMusic from '../pages/SingleMusic'
import PerfilPage from '../pages/PerfilPage'
import SearchPage from '../pages/SearchPage'

function Paths() {
  return (
    <Router>
      <Navbar />
      <NavbarSide />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/perfil' element={<PerfilPage />} />
        <Route path='/music' element={<SingleMusic />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default Paths
