import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src='#'
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My title is</p>
          <p className='user-value'>value</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name'
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age'>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' >
            loading...
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
