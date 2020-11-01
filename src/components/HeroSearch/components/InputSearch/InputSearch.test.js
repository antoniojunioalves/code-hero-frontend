import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import InputSearch from './InputSearch'

const onSearch = jest.fn()

test('renders InputSearch component', () => {
  render(<InputSearch onSearch={onSearch} />)

  expect(screen.getByTestId('input-search-component')).toBeInTheDocument()
})

test('handle keyDown', () => {
  const { container } = render(<InputSearch onSearch={onSearch} />)

  const input = container.querySelector('#input-search')
  fireEvent.change(input, {
    target: { value: 'X-Man' },
  })
  fireEvent.keyDown(input, { code: 'Enter' })

  waitFor(() => {
    expect(onSearch).toBeCalledWith('X-Man')
  })
})

test('handle keyDown and not search', () => {
  const { container } = render(<InputSearch onSearch={onSearch} />)

  const input = container.querySelector('#input-search')

  fireEvent.keyDown(input, { code: 'Alt' })

  waitFor(() => {
    expect(onSearch).not.toBeCalled()
  })
})
