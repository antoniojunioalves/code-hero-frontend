import React from 'react'
import PropTypes from 'prop-types'

// Style
import './PaginationItem.scss'

const PaginationItem = ({ label, page, isActive, isDisabled, onClickItem }) => {
  const getCssClassName = () => {
    let className = 'pagination-item'

    if (!!label) {
      className = 'pagination-item-icon'
    }

    if (isActive) {
      className = className.concat(' pagination-item-active')
    }

    if (isDisabled) {
      className = className.concat(' pagination-item-disabled')
    }

    return className
  }

  return (
    <li
      data-testid='pagination-item-component'
      key={page}
      className={getCssClassName()}
      onClick={() => onClickItem(page)}
    >
      <span>{label || page}</span>
    </li>
  )
}

PaginationItem.propTypes = {
  label: PropTypes.string,
  page: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClickItem: PropTypes.func.isRequired,
}

export default PaginationItem
