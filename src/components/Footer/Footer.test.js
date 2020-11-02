import { render, screen, fireEvent, act } from '@testing-library/react'
import Footer from './Footer'
import HeroContext from '../HeroContext'
import { BrowserRouter as Router } from 'react-router-dom'

const pagination = {
  page: 1,
  limit: 10,
  total: 100,
}

test('renders Footer component', () => {
  render(
    <HeroContext.Provider value={{ pagination }}>
      <Router>
        <Footer />
      </Router>
    </HeroContext.Provider>
  )

  expect(screen.getByTestId('footer-component')).toBeInTheDocument()
})

test('handle change page', () => {
  const setPagination = jest.fn()

  render(
    <HeroContext.Provider value={{ pagination, setPagination }}>
      <Router>
        <Footer />
      </Router>
    </HeroContext.Provider>
  )

  fireEvent.click(screen.getByText('>>'))
  expect(setPagination).toBeCalledWith({ page: 10 })
})

test('handle resize window', () => {
  const setPagination = jest.fn()

  render(
    <HeroContext.Provider value={{ pagination, setPagination }}>
      <Router>
        <Footer />
      </Router>
    </HeroContext.Provider>
  )

  act(() => {
    window.innerWidth = 960
    fireEvent(window, new Event('resize'))
  })

  fireEvent.click(screen.getByText('>>'))
  expect(setPagination).toBeCalledWith({ page: 10 })
})
