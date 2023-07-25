import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <section className='movies'>
      <Link className='movie'>
        <article>
          <img src='#' alt={'title'} />
          <div className='movie-info'>
            <h4 className='title'>{'title'}</h4>
            <p>year</p>
          </div>
        </article>
      </Link>
    </section>
  )
}

export default App
