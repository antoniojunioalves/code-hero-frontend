import React from 'react'

// Style
import './InputSearch.scss'

// assets
import { ReactComponent as Search } from '../../../../assets/images/search.svg'

const InputSearch = () => (
  <section data-testid='input-search-component' className='input-container'>
    <p>Nome do personagem</p>
    <div className='input-content'>
      <input
        id='input-search'
        className='input-search'
        placeholder='Search'
      ></input>
      <Search />
    </div>
  </section>
)

export default InputSearch
