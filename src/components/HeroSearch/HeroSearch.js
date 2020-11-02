import React from 'react'

// Style
import './_heroSearch.scss'

// Components
import InputSearch from './components/InputSearch'

// Context
import useHeroContext from '../HeroContext/useHeroContext'

const HeroSearch = () => {
  const { setNameStartWith, setPagination } = useHeroContext()

  return (
    <section data-testid='hero-search-component' className='hero-search'>
      <p className='title'>Busca de personagens</p>
      <InputSearch
        onSearch={(value) => {
          setNameStartWith(value)
          setPagination({ page: 1 })
        }}
      />
    </section>
  )
}

export default HeroSearch
