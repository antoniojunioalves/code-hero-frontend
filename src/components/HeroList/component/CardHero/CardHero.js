import React from 'react'
import PropTypes from 'prop-types'

// Style
import './CardHero.scss'

const CardHero = ({ name, series, events, urlImage, extensionImage }) => (
  <div data-testid='card-hero-component' className='card-hero'>
    <section className='personagem'>
      <img alt='hero-image' src={`${urlImage}.${extensionImage}`} />
      <p>{name}</p>
    </section>
    <section>
      {series?.items?.slice(0, 3).map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </section>
    <section>
      {events?.items?.slice(0, 3).map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </section>
  </div>
)

CardHero.propTypes = {
  name: PropTypes.string.isRequired,
  series: PropTypes.object,
  events: PropTypes.object,
  urlImage: PropTypes.string,
  extensionImage: PropTypes.string,
}

export default CardHero
