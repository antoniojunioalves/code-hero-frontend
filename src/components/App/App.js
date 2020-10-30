import React, { useState } from 'react'

// style
import './App.scss'

// components
import Header from '../Header'
import Main from '../Main'

// context
import HeroContext from '../HeroContext'

const App = () => {
  const [heroes, setHeroes] = useState([])

  return (
    <section data-testid='app-component' className='App'>
      <Header />
      <HeroContext.Provider value={{ heroes, setHeroes }}>
        <Main />
      </HeroContext.Provider>
    </section>
  )
}
export default App
