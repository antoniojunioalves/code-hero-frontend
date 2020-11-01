import React, { useState, useEffect } from 'react'

// style
import './main.scss'

// Components
import HeroSearch from '../HeroSearch'
import HeroList from '../HeroList'

// context
import useHeroContext from '../HeroContext/useHeroContext'

const Main = () => {
  const { pagination, setHeroes, setPagination } = useHeroContext()

  const fetchHeroes = async () => {
    try {
      const offset = (pagination.page - 1) * pagination.limit

      let queryString = `limit=${pagination.limit}&offset=${offset}&apikey=e6dd575a751d830896bec720dea8405f`

      const { results, total } = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?${queryString}`
      )
        .then((res) => res.json())
        .then(({ data: { results, total } }) => ({ results, total }))

      setHeroes(results)
      setPagination({ total })
    } catch (error) {
      setHeroes([])
    }
  }

  useEffect(() => {
    fetchHeroes()
  }, [pagination.page])

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
