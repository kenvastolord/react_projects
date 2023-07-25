import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  return (
    <section className='movies'>
      <Link className='movie'>
        <article>
          <img src='#' alt={title} />
          <div className='movie-info'>
            <h4 className='title'>title</h4>
            <p>year</p>
          </div>
        </article>
      </Link>
    </section>
  )
}

export default Movies
