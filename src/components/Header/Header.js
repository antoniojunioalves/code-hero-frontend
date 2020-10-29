import React from 'react'
import './Header.scss'

const Header = () => (
  <header data-testid='header-component' className='header'>
    <div className='logo'>Header</div>
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
