import React from 'react'
import './cardMusic.scss'

function CardMusic({ id, name, image, followers, link}) {
  return (
    <>
      <div className='card-main'>
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
