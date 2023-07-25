import React, { useState, useRef, useEffect } from 'react'

const Submenu = () => {
  return (
    <aside
      className='submenu show'
      ref='#'
    >
      <section>
        <h4>page</h4>
        <div className='submenu-center'>
          <a href='#'>
            icon
            label
          </a>
        </div>
      </section>
    </aside>
  )
}

export default Submenu
