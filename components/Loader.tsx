
import { useTheme } from 'next-themes'
import React from 'react'

const Loader = () => {
    const {theme} = useTheme()
  return (
    <div className={`loader-${theme as string}`}></div>
  )
}

export default Loader