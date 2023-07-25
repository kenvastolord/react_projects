import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

const Sidebar = () => {
  return (
    <div
      className='sidebar-wrapper show'
    >
      <aside className='sidebar'>
        <button className='close-btn'>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          <article >
            <h4>page</h4>
            <div className='sidebar-sublinks'>
              <a href='#'>
                icon
              </a>
            </div>
          </article>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
