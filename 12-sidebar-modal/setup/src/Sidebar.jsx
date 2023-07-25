import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {
  return (
    <aside className='sidebar show-sidebar'>
      <div className='sidebar-header'>
        <img src='#' className='logo' alt='coding addict' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        <li >
          <a href='#'>
            icon
            text
          </a>
        </li>
      </ul>
      <ul className='social-icons'>
        <li >
          <a href='#'>icon</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar
