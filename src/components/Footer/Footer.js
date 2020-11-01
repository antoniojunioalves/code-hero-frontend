import React from 'react'

// Style
import './footer.scss'

// components
import Pagination from '../Pagination'

// Context
import useHeroContext from '../HeroContext/useHeroContext'

const Footer = () => {
  const { pagination, setPagination } = useHeroContext()

  const { page, limit, total } = pagination

  return (
    <footer data-testid='footer-component' className='footer'>
      <Pagination
        perPage={limit}
        currentPage={page}
        total={total}
        onChangePage={(page) => setPagination({ page })}
      />
    </footer>
  )
}

export default Footer
