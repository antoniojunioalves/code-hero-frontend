import { render, screen, fireEvent } from '@testing-library/react'
import PaginationItem from './PaginationItem'

test('renders PaginationItem component', () => {
  render(<PaginationItem page={1} onClickItem={jest.fn()} />)

  expect(screen.getByTestId('pagination-item-component')).toBeInTheDocument()
})

test('handle Click', () => {
  const onClickItem = jest.fn()

  render(<PaginationItem page={1} onClickItem={onClickItem} />)

  fireEvent.click(screen.getByTestId('pagination-item-component'))
  expect(onClickItem).toBeCalled()
})

test('renders PaginationItem with label', () => {
  render(<PaginationItem page={1} onClickItem={jest.fn()} label='>' />)

  expect(screen.getByText('>')).toBeInTheDocument()
})

test('renders PaginationItem active', () => {
  const { container } = render(
    <PaginationItem page={1} onClickItem={jest.fn()} isActive={true} />
  )

  expect(container.querySelector('.pagination-item-active')).toBeInTheDocument()
})

test('renders PaginationItem desabled', () => {
  const { container } = render(
    <PaginationItem page={1} onClickItem={jest.fn()} isDisabled={true} />
  )

  expect(
    container.querySelector('.pagination-item-disabled')
  ).toBeInTheDocument()
})
