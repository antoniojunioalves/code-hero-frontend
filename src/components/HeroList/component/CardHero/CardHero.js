import React from 'react'
import PropTypes from 'prop-types'

// Style
import './cardHero.scss'

// React router
import { Link } from 'react-router-dom'

const CardHero = ({ id, name, series, events, urlImage, extensionImage }) => (
  <Link
    to={`/Hero/${id}`}
    data-testid='card-hero-component'
    className='card-hero'
  >
    <section className='personagem'>
      <img alt='hero-image' src={`${urlImage}.${extensionImage}`} />
      <p>{name}</p>
    </section>
    <section className='personagem-series'>
      {series?.items?.slice(0, 3).map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </section>
    <section className='personagem-events'>
      {events?.items?.slice(0, 3).map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </section>
  </Link>
)

CardHero.propTypes = {
  name: PropTypes.string.isRequired,
  series: PropTypes.object,
  events: PropTypes.object,
  urlImage: PropTypes.string,
  extensionImage: PropTypes.string,
}

export default CardHero
