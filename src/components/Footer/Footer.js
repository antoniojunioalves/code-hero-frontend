import React, { useState, useEffect } from 'react'

// React router
import { useLocation } from 'react-router-dom'

// Style
import './_footer.scss'

// components
import Pagination from '../Pagination'

// Context
import useHeroContext from '../HeroContext/useHeroContext'

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const { pathname } = useLocation()
  const { pagination, setPagination } = useHeroContext()

  const { page, limit, total } = pagination

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <footer data-testid='footer-component' className='footer'>
      <Pagination
        perPage={limit}
        currentPage={page}
        total={total}
        itemsDisplayed={width <= 960 ? 3 : 5}
        isDisabled={pathname !== '/'}
        onChangePage={(page) => setPagination({ page })}
      />
    </footer>
  )
}

export default Footer
