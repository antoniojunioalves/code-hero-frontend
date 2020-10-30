import { render, screen } from '@testing-library/react'
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

const mockApi =
  'https://gateway.marvel.com:443/v1/public/characters?apikey=e6dd575a751d830896bec720dea8405f'

describe('Main component test', () => {
  afterEach(() => fetchMock.restore())

  test('renders Main component with Heroes', () => {
    fetchMock.mock(mockApi, response)

    render(
      <HeroContext.Provider
        value={{ heroes: response.data.results, setHeroes: jest.fn() }}
      >
        <Main />
      </HeroContext.Provider>
    )

    expect(screen.getByTestId('main-component')).toBeInTheDocument()
    expect(screen.getByText('3-D Man')).toBeInTheDocument()
  })

  test('renders Main component and throw error on fetch', () => {
    fetchMock.mock(mockApi, 500)

    render(
      <HeroContext.Provider value={{ heroes: [], setHeroes: jest.fn() }}>
        <Main />
      </HeroContext.Provider>
    )

    expect(screen.getByTestId('main-component')).toBeInTheDocument()
    expect(screen.queryByText('3-D Man')).not.toBeInTheDocument()
  })
})
