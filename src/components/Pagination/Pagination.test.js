import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'

test('renders Pagination component', () => {
  const onChangePage = jest.fn()

  render(
    <Pagination
      currentPage={1}
      perPage={10}
      total={100}
      onChangePage={onChangePage}
    />
  )

  expect(screen.getByTestId('pagination-component')).toBeInTheDocument()
})
