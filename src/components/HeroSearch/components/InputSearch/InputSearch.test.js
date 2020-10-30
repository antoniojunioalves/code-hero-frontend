import { render, screen } from '@testing-library/react'
import InputSearch from './InputSearch'

test('renders InputSearch component', () => {
  render(<InputSearch />)

  expect(screen.getByTestId('input-search-component')).toBeInTheDocument()
})
