import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CardMusic from '../../components/CardMusic'
import './homePage.scss'


function HomePage() {
  const [token, setToken] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if(!token && hash) {
      token = hash.substring(1).split('&').find(item => item.startsWith('access_token')).split('=')[1]
      
      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }
    setToken(token)

  }, [])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')

  }

  const searchArtists = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: 'album,artist,playlist,track'
      },
    })

    setArtists(data.artists.items)
  }

  return (
    <div className='main-container'>
      <h2 className='main-container__title'>Spot Clone</h2>

      {!token ? 
      <a
        href={`${import.meta.env.VITE_AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&response_type=${import.meta.env.VITE_RESPONSE_TYPE}`}
        className='main-container__link'
        title='Login Please'
      >
        Login Please
      </a>
      : <button onClick={logout}>Logout</button>}




      {token ?
      <form onSubmit={searchArtists}>
        <input type='text' onChange={e => setSearchKey(e.target.value)} />
        <button type='submit'>Search</button>
      </form>      
      : <h2>Please login</h2>}

      {
        artists.map(artist => (
        <CardMusic
          key={artist.id}
          id={artist.id}
          name={artist.name}
          image={artist.images[0].url}
          followers={artist.followers.total}
          link={artist.external_urls.spotify}
        />
      ))}

    </div>
  )
}

export default HomePage
