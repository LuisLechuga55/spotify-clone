import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import './perfilPage.scss'

function PerfilPage() {
  const { token, client, isAuth } = useContext(AuthContext)

  const [user, setUser] = useState([])

  useEffect(() => {
    const getUser = async () => {
      // https://api.spotify.com/v1/users/1140683843
      const { data } = await axios.get(`https://api.spotify.com/v1/users/1140683843`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(data)
    }

    getUser()
  }, [])

  console.log(user)

  /**
   * display_name
   * followers.total
   * href
   * images[0].url
   */

  return (
    <>
      <div className='perfilPage'>
        <div className='perfilPage-container'>
          <div className='perfilPage-container-header'>
            <div className='perfilPage-container-header-img'>
              <img
                src='https://i.scdn.co/image/ab6775700000ee85b2b2b2b2b2b2b2b2b2b2b2b2'
                alt='perfil'
              />
            </div>
            <div className='perfilPage-container-header-info'>
              <h1>Perfil</h1>
              <p>Nombre de usuario</p>
            </div>
          </div>
          <div className='perfilPage-container-body'>
            <div className='perfilPage-container-body-info'>
              <h2>Información</h2>
              <div className='perfilPage-container-body-info-data'>
                <p>Nombre</p>
                <p>Apellido</p>
                <p>Correo</p>
                <p>País</p>
                <p>Fecha de nacimiento</p>
              </div>
            </div>
            <div className='perfilPage-container-body-privacy'>
              <h2>Privacidad</h2>
              <div className='perfilPage-container-body-privacy-data'>
                <p>Privacidad</p>
                <p>Privacidad</p>
                <p>Privacidad</p>
                <p>Privacidad</p>
                <p>Privacidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PerfilPage
