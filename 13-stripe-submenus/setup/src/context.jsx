import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openNavbar = () => {
    setIsNavbarOpen(true)
  }
  const closeNavbar = () => {
    setIsNavbarOpen(false)
  }
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isNavbarOpen,
        isSubmenuOpen,
        openNavbar,
        openSubmenu,
        closeSubmenu,
        closeNavbar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom Hook

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
