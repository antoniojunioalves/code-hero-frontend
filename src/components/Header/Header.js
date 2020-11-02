import React from 'react'

// React router
import { Link } from 'react-router-dom'

// Style
import './header.scss'

// logo
import logo from '../../assets/images/objective.jpg'

const Header = () => (
  <header data-testid='header-component' className='header'>
    <Link to='/'>
      <img alt='logo' src={logo} className='logo' />
    </Link>
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
