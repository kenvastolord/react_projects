import React from 'react'

const Photo = () => {
  return (
    <article className='photo'>
      <img src='#' alt='#' />
      <div className='photo-info'>
        <div>
          <h4>name</h4>
          <p> likes</p>
        </div>
        <a href='#'>
          <img src='' alt='' className='user-img' />
        </a>
      </div>
    </article>
  )
}

export default Photo
