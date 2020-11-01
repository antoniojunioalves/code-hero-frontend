import React from 'react'

// Style
import './header.scss'

// logo
import logo from '../../assets/images/objective.jpg'

const Header = () => (
  <header data-testid='header-component' className='header'>
    <img alt='logo' src={logo} className='logo' />
    <section className='participante'>
      <p>
        Renan Frutuozo <span>Teste de Front-end</span>
      </p>
      <div>
        <p>RF</p>
      </div>
    </section>
  </header>
)

export default Header
