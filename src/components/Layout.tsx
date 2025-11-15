import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="site-root">
      <Header />
      <main className="site-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
