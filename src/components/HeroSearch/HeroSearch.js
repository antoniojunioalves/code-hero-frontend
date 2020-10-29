import React from 'react'

// Style
import './HeroSearch.scss'

// Components
import InputSearch from './components/InputSearch'

const HeroSearch = () => (
  <section data-testid='hero-search-component' className='hero-search'>
    <p className='title'>Busca de personagens</p>
    <InputSearch />
  </section>
)

export default HeroSearch
