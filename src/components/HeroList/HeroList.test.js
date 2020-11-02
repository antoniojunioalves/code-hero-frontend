import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
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
    <Router>
      <HeroContext.Provider value={{ heroes }}>
        <HeroList />
      </HeroContext.Provider>
    </Router>
  )

  expect(screen.getByTestId('hero-list-component')).toBeInTheDocument()
})
