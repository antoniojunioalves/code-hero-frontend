import getPagination from '../getPagination/getPagination'

test('getPagination', () => {
  const pagination = getPagination(100, 10, 10, 3)

  expect(pagination).toEqual({
    current_page: 10,
    first_page: 8,
    last_page: 10,
    next_page: 11,
    previous_page: 9,
    total_pages: 10,
  })
})

test('getPagination return default current_page', () => {
  const pagination = getPagination(100, -1, 10, 1)

  expect(pagination.current_page).toEqual(1)
})

test('getPagination with current_page > total_pages', () => {
  const pagination = getPagination(10, 10, 10, 1)

  expect(pagination.current_page).toEqual(1)
})
