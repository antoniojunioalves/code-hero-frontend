import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import HeroSearch from './HeroSearch'
import HeroContext from '../HeroContext'

const setNameStartWith = jest.fn()
const setPagination = jest.fn()

test('renders HeroSearch component', () => {
  render(
    <HeroContext.Provider value={{ setNameStartWith, setPagination }}>
      <HeroSearch />
    </HeroContext.Provider>
  )

  expect(screen.getByTestId('hero-search-component')).toBeInTheDocument()
})

test('renders HeroSearch and Search hero', () => {
  const { container } = render(
    <HeroContext.Provider value={{ setNameStartWith, setPagination }}>
      <HeroSearch />
    </HeroContext.Provider>
  )
  fireEvent.change(container.querySelector('#input-search'), {
    target: { value: 'X-Man' },
  })
  fireEvent.click(screen.getByTestId('search'))

  waitFor(() => {
    expect(setNameStartWith).toBeCalledWith('X-Man')
    expect(setPagination).toBeCalledWith({ page: 1 })
  })
})
