import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './homePage.scss'

function HomePage() {
  const { token } = useContext(AuthContext)

  return (
    <div className='Home-container'>
      {!token ? (
        <div className='Home-container'>
          <h1 className='Home-title'>Bienvenido a Spotify Clone</h1>
          <p className='Home-text'>
            Escucha millones de canciones y podcasts. ¡Sin anuncios! Disfruta de
            todo lo que te gusta, desde artistas favoritos hasta géneros
            musicales. ¡Y todo, gratis! Inicia Sesión con tu cuenta de Spotify.
          </p>
        </div>
      ) : (
        <div className='Home-container'>
          <h1 className='Home-title'>Bienvenido a Spotify Clone</h1>
          <p className='Home-text'>
            Escucha millones de canciones y podcasts. ¡Sin anuncios! Disfruta de
            todo lo que te gusta, desde artistas favoritos hasta géneros
            musicales. ¡Y todo, gratis!
          </p>
        </div>
        
      )}
    </div>
  )
}

export default HomePage
