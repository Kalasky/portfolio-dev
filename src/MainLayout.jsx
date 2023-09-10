import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {
  // gets the current location object and assigns it to the location variable
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]) // the effect will run when the location changes

  // the children prop will be the components you want to wrap with MainLayout
  return <>{children}</>
}

export default MainLayout
