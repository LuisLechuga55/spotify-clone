import { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import CardMusic from '../../components/CardMusic'
import PlaySong from '../../components/PlaySong'
import './searchPage.scss'

function SearchPage() {
  const { token } = useContext(AuthContext)
  
  const [ searchKey, setSearchKey ] = useState('')
  const [ searchRes, setSearchRes ] = useState([])
  const [ playingTrack, setPlayingTrack ] = useState()
  const [ lyrics, setLyrics ] = useState('')

  function chooseTrack(searchRes) {
    setPlayingTrack(searchRes)
    setSearchKey('')
    setLyrics('')
  }

  const searchResults = async (e) => {
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
    setSearchRes(data.artists.items)
  }

  console.log(searchRes)

  return (
    <>
      <div className='search-container'>
        <form
          className='search-form'
          onSubmit={searchResults}
        >
          <input
            className='search-input'
            type='text'
            onChange={e => setSearchKey(e.target.value)}
            placeholder='Search for artists, songs, or podcasts'
          />
          <button
            className='search-button'
            type='submit'
          >
              Search
          </button>
        </form>
        
        <div className='search-results'>
        {
          searchRes.map(artist => (
          <CardMusic
            key={artist.id}
            artist={artist}
            id={artist.id}
            name={artist.name}
            image={artist.images[0] ? artist.images[0].url : 'https://bazarama.com/assets/imgs/Image-not-available.png'}
            followers={artist.followers.total}
            link={artist.external_urls.spotify}
            chooseTrack={chooseTrack}
          />
        ))}
        </div>

        <div>
          <PlaySong
            token={token}
            trackUri={playingTrack?.uri}
          />
        </div>

      </div>
    </>
  )
}

export default SearchPage
