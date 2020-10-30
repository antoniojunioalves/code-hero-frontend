import React, { useState, useEffect } from 'react'

// style
import './Main.scss'

// Components
import HeroSearch from '../HeroSearch'
import HeroList from '../HeroList'

// context
import useHeroContext from '../HeroContext/useHeroContext'

const Main = () => {
  const { setHeroes } = useHeroContext()

  const fetchHeroes = async () => {
    try {
      const response = await fetch(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=e6dd575a751d830896bec720dea8405f'
      )
        .then((res) => {
          if (!res.ok) throw Error()

          return res
        })
        .then((res) => res.json())
        .then(({ data }) => data.results)

      setHeroes(response)
    } catch (error) {
      setHeroes([])
    }
  }

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <main data-testid='main-component' className='main'>
      <section className='container'>
        <HeroSearch />
        <HeroList />
      </section>
    </main>
  )
}

export default Main
