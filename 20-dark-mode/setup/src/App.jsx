import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn">
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        <Article />;
      </section>
    </main>
  );
}

export default App
