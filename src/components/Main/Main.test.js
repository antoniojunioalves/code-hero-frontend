import { render, screen } from '@testing-library/react'
import Main from './Main'

test('renders Main component', () => {
  render(<Main />)
  const component = screen.getByTestId('main-component')

  expect(component).toBeInTheDocument()
})
