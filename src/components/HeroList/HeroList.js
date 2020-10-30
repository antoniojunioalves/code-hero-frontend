import React from 'react'

// Style
import './HeroList.scss'

// Components
import CardHero from './component/CardHero'

// context
import useHeroContext from '../HeroContext/useHeroContext'

const HeroList = () => {
  const { heroes } = useHeroContext()

  return (
    <section data-testid='hero-list-component'>
      <div className='list-header'>
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </div>
      <ul className='list-hero'>
        {heroes.map(
          ({ id, name, thumbnail: { path, extension }, events, series }) => {
            return (
              <li key={id}>
                <CardHero
                  name={name}
                  series={series}
                  events={events}
                  urlImage={path}
                  extensionImage={extension}
                />
              </li>
            )
          }
        )}
      </ul>
    </section>
  )
}

export default HeroList