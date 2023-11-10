import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'

import favicon from '../assets/nav-laptop.png'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

import '../styles/style.css'
import '../styles/new-moon.css'

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const onUpdateTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', newTheme)
      setTheme(newTheme)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme')
      if (savedTheme) {
        setTheme(savedTheme)
      } else {
        try {
          const isBrowserThemeDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches
          isBrowserThemeDark && setTheme('dark')
        } catch (e) {}
      }
    }
  }, [])

  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
        {theme === 'dark' && (
          <link rel="stylesheet" type="text/css" href="/dark-mode.css" />
        )}
      </Helmet>

      <div id="layout" className="layout">
        <Navigation onUpdateTheme={onUpdateTheme} theme={theme} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
