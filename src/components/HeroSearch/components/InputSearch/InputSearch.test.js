import { render, screen } from '@testing-library/react'
import InputSearch from './InputSearch'

test('renders InputSearch component', () => {
  render(<InputSearch />)
  const component = screen.getByTestId('input-search-component')

  expect(component).toBeInTheDocument()
})
