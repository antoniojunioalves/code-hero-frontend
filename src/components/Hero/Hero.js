import React, { useState, useEffect } from 'react'

// Style
import './_hero.scss'

// Context
import useHeroContext from '../HeroContext/useHeroContext'

// React router
import { useParams, useHistory } from 'react-router-dom'

const Hero = () => {
  const [hero, setHero] = useState({})
  const [seriesHero, setSeriesHero] = useState([])
  const { heroes } = useHeroContext()
  const { heroId } = useParams()
  const history = useHistory()

  const fetchSeries = async (url) => {
    try {
      const { results } = await fetch(
        `${url}?apikey=e6dd575a751d830896bec720dea8405f`
      )
        .then((res) => res.json())
        .then(({ data: { results } }) => ({ results }))

      setSeriesHero(results)
    } catch (error) {
      setSeriesHero([])
    }
  }

  useEffect(() => {
    const hero = heroes.find((hero) => hero.id === parseInt(heroId))

    if (!hero) {
      history.push('/')
    }

    setHero(hero)
  }, [])

  useEffect(() => {
    const { series: { collectionURI } = {} } = hero

    if (!!collectionURI) {
      fetchSeries(collectionURI?.replace('http://', 'https://'))
    }
  }, [hero.series])

  const { name, description, thumbnail: { extension, path } = {} } = hero

  return (
    <section data-testid='hero-component' className='hero-component'>
      <div className='hero-header'>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <img alt='hero_image' src={`${path}.${extension}`} />
      </div>
      <section className='hero-series'>
        <h3>Séries</h3>
        <ul>
          {seriesHero.map(
            ({ id, title, thumbnail: { extension, path } = {} }) => (
              <li key={id}>
                <img alt={`hero_serie-${id}`} src={`${path}.${extension}`} />
                <p>{title}</p>
              </li>
            )
          )}
        </ul>
      </section>
    </section>
  )
}

export default Hero
