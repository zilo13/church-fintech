import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Grace Lighthouse Ministry. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
