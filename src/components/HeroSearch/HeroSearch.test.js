import { render, screen } from '@testing-library/react'
import HeroSearch from './HeroSearch'

test('renders HeroSearch component', () => {
  render(<HeroSearch />)
  const component = screen.getByTestId('hero-search-component')

  expect(component).toBeInTheDocument()
})
