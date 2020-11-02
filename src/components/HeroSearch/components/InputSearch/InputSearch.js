import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Style
import './_inputSearch.scss'

// assets
import { ReactComponent as Search } from '../../../../assets/images/search.svg'

const InputSearch = ({ onSearch }) => {
  const [inputText, setInputText] = useState('')

  const handleKeyDown = (code) => {
    if (code === 'Enter') {
      onSearch(inputText)
    }
  }

  return (
    <section data-testid='input-search-component' className='input-container'>
      <p>Nome do personagem</p>
      <div className='input-content'>
        <input
          id='input-search'
          className='input-search'
          placeholder='Search'
          onChange={({ target: { value } }) => setInputText(value)}
          onKeyDown={({ code }) => handleKeyDown(code)}
          value={inputText}
        ></input>
        <Search data-testid='search' onClick={() => onSearch(inputText)} />
      </div>
    </section>
  )
}

InputSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default InputSearch
