import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import PlaySong from '../../components/PlaySong'
import './initialPage.scss'

function InitialPage({ chooseTrack }) {
  const { token } = useContext(AuthContext)

  const [release, setRelease] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])
  const [player, setPlayer] = useState([])
  const [playingTack, setPlayingTrack] = useState()

  function chooseTrack(track) {
    setPlayingTrack(track)
    
  }

  useEffect(() => {
    getRelease()
    getPlaylists()
    getCategories()
    getPlayer()
  }, [])

  const getPlayer = async () => {
    const { data } = await axios.get('https://api.spotify.com/v1/me/player', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setPlayer(data)
  }

  const getRelease = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: 10
      }
    })
    setRelease(data.albums.items)
  }

  const getPlaylists = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/browse/featured-playlists`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: 10
      }
    })
    setPlaylists(data.playlists.items)
  }

  const getCategories = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/browse/categories`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: 10
      }
    })
    setCategories(data.categories.items)
  }

  function handleplay() {
    chooseTrack(player)
  }

  // TODO: Render the music data
  // TODO: Add a button to play the music
  // TODO: Add a button to add the music to the playlist
  // TODO: Add a button to add the music to the favorites
  // TODO: Add a button to add the music to the library
  // TODO: Add a button to add the music to the queue
  // TODO: Add a button to add the music to the playlist
  
  return (
    <div className='Initial-container'>
      <h1 className='Initial-title'>Release</h1>
        <div className='Initial-container-music'>
          {release.map((item) => (
            <div
              className='Initial-container-music-card'
              key={item.id}
              onClick={handleplay}
            >

              <img src={item.images[0].url} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.artists[0].name}</p>
              <p>Release: {item.release_date}</p>

            </div>
          ))}
        </div>
        <h1 className='Initial-title'>Playlists</h1>
        <div className='Initial-container-music'>
          {playlists.map((item) => (
            <div className='Initial-container-music-card' key={item.id}>
              <img src={item.images[0].url} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.owner.display_name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <h1 className='Initial-title'>New Releases</h1>
        <div className='Initial-container-music'>
          {categories.map((item) => (
            <div className='Initial-container-music-card' key={item.id}>
              <img src={item.icons[0].url} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default InitialPage
