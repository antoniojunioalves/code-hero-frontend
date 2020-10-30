import { render, screen } from '@testing-library/react'
import HeroList from './HeroList'
import HeroContext from '../HeroContext'

test('renders HeroList component', () => {
  const heroes = [
    {
      id: 1011334,
      name: '3-D Man',
      description: '',
      thumbnail: {},
      events: {},
      series: {},
    },
  ]

  render(
    <HeroContext.Provider value={{ heroes }}>
      <HeroList />
    </HeroContext.Provider>
  )

  expect(screen.getByTestId('hero-list-component')).toBeInTheDocument()
})
