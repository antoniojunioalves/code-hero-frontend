import React from 'react'
import PropTypes from 'prop-types'

// Style
import './pagination.scss'

// components
import PaginationItem from './components/PaginationItem'

// utils
import getPagination from './utils/getPagination/getPagination'

const Pagination = ({
  perPage,
  itemsDisplayed,
  total,
  currentPage,
  isDisabled,
  onChangePage,
}) => {
  const createPaginationItems = () => {
    const items = []

    const pagination = getPagination(
      total,
      currentPage,
      perPage,
      itemsDisplayed
    )

    for (let i = pagination.first_page; i <= pagination.last_page; i++) {
      items.push(
        <PaginationItem
          isActive={i === currentPage}
          page={i}
          onClickItem={onChangePage}
        />
      )
    }

    items.unshift(
      <PaginationItem
        label='<'
        page={pagination.previous_page}
        isDisabled={currentPage <= 1}
        onClickItem={onChangePage}
      />
    )

    items.unshift(
      <PaginationItem
        label='<<'
        page={1}
        isDisabled={currentPage <= 2}
        onClickItem={onChangePage}
      />
    )

    items.push(
      <PaginationItem
        label='>'
        page={pagination.next_page}
        isDisabled={currentPage >= pagination.total_pages}
        onClickItem={onChangePage}
      />
    )
    items.push(
      <PaginationItem
        label='>>'
        page={pagination.total_pages}
        isDisabled={currentPage >= pagination.total_pages - 1}
        onClickItem={onChangePage}
      />
    )

    return items
  }

  return (
    <>
      {!isDisabled && (
        <ul data-testid='pagination-component' className='pagination'>
          {createPaginationItems()}
        </ul>
      )}
    </>
  )
}

Pagination.propTypes = {
  perPage: PropTypes.number.isRequired,
  itemsDisplayed: PropTypes.number,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool,
  onChangePage: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  itemsDisplayed: 5,
  isDisabled: false,
}

export default Pagination
