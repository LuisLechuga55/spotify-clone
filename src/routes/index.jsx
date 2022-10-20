import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import SingleMusic from '../pages/SingleMusic'

function Paths() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/music' element={<SingleMusic />} />
      </Routes>
    </Router>
  )
}

export default Paths
