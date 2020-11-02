import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
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

  render(
    <Router>
      <CardHero {...props} />
    </Router>
  )

  expect(screen.getByTestId('card-hero-component')).toBeInTheDocument()
})
