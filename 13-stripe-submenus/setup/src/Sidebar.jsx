import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isNavbarOpen, closeNavbar } = useGlobalContext()
  return (
    <div
      className={`sidebar-wrapper ${isNavbarOpen && 'show'}`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeNavbar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((sublink, index) => {
            const { page, links } = sublink
            return (
              <article key={index} >
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { label, url, icon } = link
                    return (
                      < a key={index} href={url} >
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside >
    </div >
  )
}

export default Sidebar
