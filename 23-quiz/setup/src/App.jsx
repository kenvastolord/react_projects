import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : correct / index
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            <button
              className='answer-btn'
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        </article>
        <button className='next-question' >
          next question
        </button>
      </section>
    </main>
  )
}

export default App
