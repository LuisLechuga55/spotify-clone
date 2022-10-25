import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import CardMusic from '../../components/CardMusic'
import './homePage.scss'

function HomePage() {
  const { token } = useContext(AuthContext)

  const navigate = useNavigate()
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])

  const searchArtists = async (e) => {
    e.preventDefault()
    const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: 'track,artist,album,playlist,show,episode'
      },
    })

    setArtists(data.artists.items)
    // navigate('/search')
  }

  console.log(artists)

  return (
    <div className='main-container'>

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
          image={artist.images[0] ? artist.images[0].url : 'https://www.rockandpop.cl/wp-content/uploads/2020/04/spotify-logo-png-1.png'}
          followers={artist.followers.total}
          link={artist.external_urls.spotify}
        />
      ))}

    </div>
  )
}

export default HomePage
