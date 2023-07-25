import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  return (
    <section className='single-movie'>
      <img src='#' alt='' />
      <div className='single-movie-info'>
        <h2>title</h2>
        <p>plot</p>
        <h4>year</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
