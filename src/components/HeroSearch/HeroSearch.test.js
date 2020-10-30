import { render, screen } from '@testing-library/react'
import HeroSearch from './HeroSearch'

test('renders HeroSearch component', () => {
  render(<HeroSearch />)

  expect(screen.getByTestId('hero-search-component')).toBeInTheDocument()
})
