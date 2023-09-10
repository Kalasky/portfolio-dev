import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])
}

export default useScrollToTop
