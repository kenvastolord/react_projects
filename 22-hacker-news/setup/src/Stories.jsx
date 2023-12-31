import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  return (
    <section className='stories'>
      <article className='story'>
        <h4 className='title'>title</h4>
        <p className='info'>
          points by <span>author </span>
          comments
        </p>
        <div>
          <a
            href='#'
            className='read-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            read more
          </a>
          <button
            className='remove-btn'
          >
            remove
          </button>
        </div>
      </article>
    </section>
  )
}

export default Stories
