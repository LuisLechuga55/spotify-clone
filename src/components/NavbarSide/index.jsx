import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import './navbarSide.scss'

function NavbarSide() {
  const { token } = useContext(AuthContext)

  return (
  <div className='SideNavbar-container'>

    <a href='/' className='SideNavbar-logo-link'>
      <img
        className='SideNavbar-logo'
        src='https://s03.s3c.es/imag/_v0/1200x655/8/6/a/490x_spotify-logo.jpg'
        alt=''
      />
    </a>

    <hr />

    <ul className='SideNavbar-main-list'>

      <li className='SideNavbar-list'>
        <a href='#' className='SideNavbar-link' aria-current='page'>
          <i className="bi bi-house"/>
          Inicio
        </a>
      </li>

      <li className='SideNavbar-list'>
        <Link to='/search' className='SideNavbar-link'>
        <i className="bi bi-search"/>
          Buscar
        </Link>
      </li>

      {
        token ?
        <li className='SideNavbar-list'>
        <a href='#' className='SideNavbar-link'>
        <i className="bi bi-bookmark"/>
          Tu Biblioteca
        </a>
      </li>
        : null
      }


    </ul>

  </div>
  )
}

export default NavbarSide
