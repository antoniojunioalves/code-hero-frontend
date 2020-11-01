import { render, screen, fireEvent } from '@testing-library/react'
import Footer from './Footer'
import HeroContext from '../HeroContext'

const pagination = {
  page: 1,
  limit: 10,
  total: 100,
}

test('renders Footer component', () => {
  render(
    <HeroContext.Provider value={{ pagination }}>
      <Footer />
    </HeroContext.Provider>
  )

  expect(screen.getByTestId('footer-component')).toBeInTheDocument()
})

test('handle change page', () => {
  const setPagination = jest.fn()

  render(
    <HeroContext.Provider value={{ pagination, setPagination }}>
      <Footer />
    </HeroContext.Provider>
  )

  fireEvent.click(screen.getByText('>>'))
  expect(setPagination).toBeCalledWith({ page: 10 })
})
