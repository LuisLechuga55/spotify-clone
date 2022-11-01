import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './navbar.scss'

function Navbar() {
  const { token, logoutClient } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    window.location.reload()
    logoutClient()
  }

  // `${import.meta.env.VITE_AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=${import.meta.env.VITE_RESPONSE_TYPE}`
  // const handleLogin = () => {
  //   const url = import.meta.env.VITE_AUTH_ENDPOINT
  //   const clientId = import.meta.env.VITE_CLIENT_ID
  //   const redirectUri = import.meta.env.VITE_REDIRECT_URI
  //   const responseType = import.meta.env.VITE_RESPONSE_TYPE
  //   const scopes = [
  //     'user-read-private',
  //     'user-read-email',
  //     'user-read-playback-state',
  //     'user-modify-playback-state',
  //     'user-read-currently-playing',
  //     'streaming',
  //     'app-remote-control',
  //     'user-read-recently-played',
  //     'user-top-read',
  //     'playlist-read-private',
  //     'playlist-read-collaborative',
  //     'playlist-modify-public',
  //     'playlist-modify-private',
  //     'user-library-modify',
  //     'user-library-read',
  //     'user-follow-read',
  //     'user-follow-modify',
  //   ]
  //   const scopesString = scopes.join('%20')
  //   const urlToRedirect = `${url}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopesString}&response_type=${responseType}&show_dialog=true`
  //   window.location = urlToRedirect
  // }

  return (
  <header className='Navbar-container'>

    <div className='Navbar-container-arrow'>
      <Link
        to='/'
        className='Navbar-arrow'
        title='Atras'>
        <i className='bi bi-chevron-left'/>
      </Link>

      <Link
        to='/'
        className='Navbar-arrow'
        title='Avanzar'>
        <i className='bi bi-chevron-right'/>
      </Link>
    </div>

    <ul className='Navbar-list'>
      <li>
        {!token ? (
          <Link
            to='/'
            className='Navbar-links'>Home
          </Link>
        ) : (
          <Link
            to='/initial'
            className='Navbar-links'>Home
          </Link>
        )}
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

      <button
        type='button'
        className='Navbar-btn__link'
        onClick={handleLogin}
      >
        <a
          href={`${import.meta.env.VITE_AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=${import.meta.env.VITE_RESPONSE_TYPE}&show_dialog=true`}
          title='Login Please'
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

      <Link
        href='/'
        className='Navbar-link-logout'
        // onClick={handleLogout}
      >
        Cerrar Sesion
      </Link>
    </div>
    }

  </header>
  )
}

export default Navbar
