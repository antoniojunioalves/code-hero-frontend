import React from 'react'

// Context
import HeroContext from '../HeroContext'

export default function useHeroContext() {
  return React.useContext(HeroContext)
}
