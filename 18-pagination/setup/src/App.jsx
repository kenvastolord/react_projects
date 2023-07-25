import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  return (
    <main>
      <div className='section-title'>
        <h1>'loading...'</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          <Follower />
        </div>
        <div className='btn-container'>
          <button className='prev-btn'>
            prev
          </button>
          <button
            className='page-btn'
          >
            index + 1
          </button>
          <button className='next-btn'>
            next
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
