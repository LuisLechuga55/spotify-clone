import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './navbar.scss'

function Navbar() {
  const { token, logoutClient } = useContext(AuthContext)

  return (
  <header className='Navbar-container'>

    <div className='Navbar-container-arrow'>
      <a
        href='/'
        className='Navbar-arrow'
        title='Atras'>
        <i className='bi bi-chevron-left'/>
      </a>

      <a
        href='/'
        className='Navbar-arrow'
        title='Avanzar'>
        <i className='bi bi-chevron-right'/>
      </a>
    </div>

    <ul className='Navbar-list'>
      <li>
        <Link
          to='/'
          className='Navbar-links'>Home
        </Link>
      </li>

      <li>
        <Link
          to='/'
          className='Navbar-links'>Premium
        </Link>
      </li>

      <li>
        <a
          href='https://support.spotify.com/mx/'
          target='_blank'
          rel='noreferrer noopener'
          title='Ayuda'
          className='Navbar-links'>Ayuda
        </a>
      </li>

      <li>
        <a
          href='https://www.spotify.com/mx/download/windows/'
          target='_blank'
          rel='noreferrer noopener'
          title='Descargar'
          className='Navbar-links'>Descargar
        </a>
      </li>
    </ul>

    <h2 className='Navbar-separate'>|</h2>

    {!token ?
    <div className='Navbar-btn'>
      <button type='button' className='Navbar-btn__link'>
        <a
          href='https://www.spotify.com/mx/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F'
          target='_blank'
          title='SignUp Please'
        >
          Registrate
        </a>
      </button>

      <button type='button' className='Navbar-btn__link'>
        <a
          href={`${import.meta.env.VITE_AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=${import.meta.env.VITE_RESPONSE_TYPE}`}
          title='Login Please'
          rel='noreferrer noopener'
        >
          Iniciar Sesion
        </a>
      </button>
    </div>
    : <div className='Navbar-logout'>
      <Link
        to='/perfil'
        title='Perfil'
        className='Navbar-link-logout mx-4'
      >
        Perfil
      </Link>

      <a
        href='/'
        className='Navbar-link-logout'
        rel='noreferrer noopener'
        onClick={logoutClient}
      >
        Cerrar Sesion
      </a>
    </div>
    }

  </header>
  )
}

export default Navbar
