import React from 'react'

// style
import './App.scss'

// components
import Header from '../Header'
import Main from '../Main'

const App = () => (
  <section data-testid='app-component' className='App'>
    <Header />
    <Main />
  </section>
)

export default App
