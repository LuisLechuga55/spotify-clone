import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import NavbarSide from '../components/NavbarSide'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import InitialPage from '../pages/InitialPage'
import SingleMusic from '../pages/SingleMusic'
import PerfilPage from '../pages/PerfilPage'
import SearchPage from '../pages/SearchPage'

function Paths() {
  const { isAuth } = useContext(AuthContext)

  console.log(isAuth)

  return (
    <Router>
      <Navbar />
      <NavbarSide />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/initial' element={<InitialPage />} />
        <Route path='/perfil' element={<PerfilPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/music' element={<SingleMusic />} />
      </Routes>
    </Router>
  )
}

export default Paths
