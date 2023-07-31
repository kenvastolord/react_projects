import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openNavbar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 5
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='navbar logo' />
          <button className='btn toggle-btn' onClick={openNavbar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((navLink, index) => {
            const { page } = navLink
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar
