import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  return (
    <form className='search-form' >
      <h2>search movies</h2>
      <input
        type='text '
        className='form-input'
      />
      <div className='error'>error.msg</div>
    </form>
  )
}

export default SearchForm
