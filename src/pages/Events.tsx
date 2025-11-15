import React from 'react'

const EVENTS = [
  { id: 1, title: 'Sunday Service', date: 'Every Sunday', time: '9:00 AM', location: 'Main Sanctuary', desc: 'Weekly worship and teaching.' },
  { id: 2, title: 'Leadership Conference', date: '2026-01-15', time: '9:00 AM', location: 'Conference Center', desc: 'Guest speakers and workshops.' },
  { id: 3, title: 'Night Vigil', date: '2025-12-24', time: '11:00 PM', location: 'Sanctuary', desc: 'A night of prayer and worship.' }
]

const Events: React.FC = () => {
  return (
    <div className="container section">
      <h2>Events</h2>
      <div className="events-grid">
        {EVENTS.map((e) => (
          <article key={e.id} className="event">
            <h3>{e.title}</h3>
            <p className="muted">{e.date} • {e.time} • {e.location}</p>
            <p>{e.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Events
