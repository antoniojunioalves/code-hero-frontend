import { render, screen, waitFor } from '@testing-library/react'
import Hero from './Hero'
import HeroContext from '../HeroContext'

// fetch mock
import fetchMock from 'fetch-mock'

const response = {
  data: {
    results: [
      {
        id: 15331,
        title: 'Age of Apocalypse (2011 - 2013)',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/90/50fecabbdc324',
          extension: 'jpg',
        },
      },
      {
        id: 15332,
        title: 'Age of Apocalypse',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/90/50fecabbdc324',
          extension: 'jpg',
        },
      },
    ],
  },
}

const heroes = [
  {
    id: 1011334,
    name: '3-D Man',
    description: '',
    thumbnail: {},
    events: {},
    series: {
      collectionURI:
        'http://gateway.marvel.com/v1/public/characters/1009724/series',
    },
  },
]

const mockApi =
  'http://gateway.marvel.com/v1/public/characters/1009724/series?apikey=e6dd575a751d830896bec720dea8405f'

const push = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    heroId: 1011334,
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
  match: {},
}))

describe('Main component test', () => {
  afterEach(() => fetchMock.reset())

  test('renders Hero component', () => {
    fetchMock.mock(mockApi, response)

    render(
      <HeroContext.Provider value={{ heroes }}>
        <Hero />
      </HeroContext.Provider>
    )

    waitFor(() => {
      expect(screen.getByTestId('hero-component')).toBeInTheDocument()
    })
  })

  test('renders Hero with error on fetch series', () => {
    fetchMock.mock(mockApi, 404)

    const { container } = render(
      <HeroContext.Provider value={{ heroes: [{ ...heroes, id: 0 }] }}>
        <Hero />
      </HeroContext.Provider>
    )

    waitFor(() => {
      expect(screen.getByTestId('hero-component')).toBeInTheDocument()
      expect(container.querySelector('li')).not.toBeInTheDocument()
    })
  })
})
