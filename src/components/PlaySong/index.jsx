import { useState, useEffect } from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback'

function PlaySong({ token, trackUri }) {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  if(!token) return null

  return (
    <SpotifyWebPlayer
      token={token}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) {
          setPlay(false)
        }
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}

export default PlaySong
