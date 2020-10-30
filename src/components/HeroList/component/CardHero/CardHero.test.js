import { render, screen } from '@testing-library/react'
import CardHero from './CardHero'

test('renders CardHero component', () => {
  const props = {
    name: '3-D Man',
    series: {
      items: [{ name: 'Serie' }],
    },
    events: {
      items: [{ name: 'event' }],
    },
  }

  render(<CardHero {...props} />)

  expect(screen.getByTestId('card-hero-component')).toBeInTheDocument()
})
