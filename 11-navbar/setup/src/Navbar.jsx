import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='#' className='logo' alt='logo' />
          <button className='nav-toggle' >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref='#'>
          <ul className='links' ref='#'>
            <li >
              <a href='#'>text</a>
            </li>
          </ul>
        </div>
        <ul className='social-icons'>
          <li >
            <a href='#'>icon</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
