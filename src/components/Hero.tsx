import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        setOffset(window.scrollY)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const bgStyle: React.CSSProperties = {
    backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80&auto=format&fit=crop')",
    backgroundPosition: `center ${-offset * 0.2}px`
  }

  return (
    <section className="hero" style={bgStyle} aria-hidden={false}>
      <div className="hero-inner container">
        <h1>Grace Lighthouse Ministry</h1>
        <p className="lead">A welcoming community of faith — join us for worship and growth.</p>
        <div className="hero-ctas">
          <a className="btn primary" href="/#join">Join Us</a>
          <a className="btn" href="/sermons">Watch Sermons</a>
          <a className="btn" href="/give">Give</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
