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
      const { data } = await axios.get(`https://api.spotify.com/v1/me/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUser(data)
    }

    getUser()
  }, [])

  console.log(user)

  return (
    <>
      <div className='perfilPage'>
        <div className='perfilPage-container'>
            {/* <div className='perfilPage-container-header-img'>
              <img
                src='https://i.scdn.co/image/ab6775700000ee85b2b2b2b2b2b2b2b2b2b2b2b2'
                alt='perfil'
              />
            </div> */}
          <div className='perfilPage-container-body'>
            <div className='perfilPage-container-body-info'>

              <div className='perfilPage-container-body-info-data'>
                <h2>Información</h2>
                <h4>{user.display_name}</h4>
                
                <div className='perfilPage-container-details'>
                  <p>
                  <i class="bi bi-envelope mx-2"/>
                    {user.email}
                  </p>

                  <p>
                    <i class="bi bi-globe mx-2"/>
                    {user.country}
                  </p>
                  
                  <p>
                    <i class="bi bi-people mx-2"/>
                    {user.followers? user.followers.total : 'No followers'}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PerfilPage
