import { render, screen, waitFor } from '@testing-library/react'
import Main from './Main'
import HeroContext from '../HeroContext'

// fetch mock
import fetchMock from 'fetch-mock'

const response = {
  data: {
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        thumbnail: {},
        events: {},
        series: {},
      },
    ],
  },
}

const pagination = {
  page: 1,
  limit: 10,
  total: 100,
}

const mockApi =
  'https://gateway.marvel.com/v1/public/characters?limit=10&offset=0&apikey=e6dd575a751d830896bec720dea8405f'

describe('Main component test', () => {
  afterEach(() => fetchMock.reset())

  test('renders Main component with Heroes', () => {
    fetchMock.mock(mockApi, response)

    const setHeroes = jest.fn()

    render(
      <HeroContext.Provider
        value={{
          pagination,
          heroes: response.data.results,
          setHeroes,
        }}
      >
        <Main />
      </HeroContext.Provider>
    )

    waitFor(() => {
      expect(screen.getByTestId('main-component')).toBeInTheDocument()
      expect(setHeroes).toBeCalled(response.data.results)
    })
  })

  test('renders Main component and throw error on fetch', () => {
    const setHeroes = jest.fn()

    render(
      <HeroContext.Provider
        value={{ nameStartWith: 'X-man', pagination, heroes: [], setHeroes }}
      >
        <Main />
      </HeroContext.Provider>
    )

    waitFor(() => {
      expect(screen.getByTestId('main-component')).toBeInTheDocument()
      expect(setHeroes).toBeCalled([])
    })
  })
})
