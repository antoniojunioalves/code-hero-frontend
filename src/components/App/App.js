import React, { useState } from 'react'

// style
import './app.scss'

// components
import Header from '../Header'
import Routes from '../Routes'
import Footer from '../Footer'

// context
import HeroContext from '../HeroContext'

const App = () => {
  const [nameStartWith, setNameStartWith] = useState('')
  const [heroes, setHeroes] = useState([])
  const [pagination, _setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  })

  const handlePagination = (props) => {
    _setPagination({ ...pagination, ...props })
  }

  return (
    <section data-testid='app-component' className='App'>
      <Header />
      <HeroContext.Provider
        value={{
          heroes,
          setHeroes,
          pagination,
          setPagination: handlePagination,
          nameStartWith,
          setNameStartWith,
        }}
      >
        <Routes />
        <Footer />
      </HeroContext.Provider>
    </section>
  )
}

export default App
