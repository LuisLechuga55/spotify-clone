import React from 'react'
import './cardMusic.scss'

function CardMusic({ artist, id, name, image, followers, link, chooseTrack }) {
  function handleplay() {
    chooseTrack(artist)
  }

  return (
    <>
      <div
        className='card-main'
        onClick={handleplay}  
      >
        <img src={image} alt='Image Not Found' className='card-image my-5' />
        <div className='card-info'>
          <h2 className='card-title text-light'>{name}</h2>
          <p className='card-followers text-light'>Followers: {followers}</p>
          <a href='#' className='card-link'>{link}</a>
        </div>
      </div>
    </>
  )
}

export default CardMusic
