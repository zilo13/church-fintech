import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <NavLink to="/" className="brand-link">Grace Lighthouse Ministry</NavLink>
        </div>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/sermons" onClick={() => setOpen(false)}>Sermons</NavLink>
          <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/give" onClick={() => setOpen(false)}>Give</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/live" onClick={() => setOpen(false)}>Live</NavLink>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header
