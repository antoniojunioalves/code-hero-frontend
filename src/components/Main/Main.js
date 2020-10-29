import React from 'react'

// style
import './Main.scss'

// Components
import HeroSearch from '../HeroSearch'

const Main = () => (
  <main data-testid='main-component' className='main'>
    <section className='container'>
      <HeroSearch />
    </section>
  </main>
)

export default Main
