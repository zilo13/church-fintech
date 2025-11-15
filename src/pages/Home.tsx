import React from 'react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'

const Home: React.FC = () => {
  const upcoming = [
    { id: 1, title: 'Youth Retreat', date: '2025-12-05', time: '10:00 AM', location: 'Main Hall' },
    { id: 2, title: 'Christmas Night Vigil', date: '2025-12-24', time: '11:00 PM', location: 'Sanctuary' }
  ]

  return (
    <div>
      <Hero />

      <section className="container section service-times">
        <Reveal>
          <h2>Service Times</h2>
          <div className="grid">
            <div className="card">
              <h3>Sunday Worship</h3>
              <p>9:00 AM & 11:00 AM</p>
            </div>
            <div className="card">
              <h3>Midweek Service</h3>
              <p>Wednesdays, 6:30 PM</p>
            </div>
            <div className="card">
              <h3>Prayer Meeting</h3>
              <p>Fridays, 7:00 PM</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container section upcoming">
        <Reveal>
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {upcoming.map((e) => (
              <article key={e.id} className="event-card">
                <h3>{e.title}</h3>
                <p>{e.date} — {e.time}</p>
                <p className="muted">{e.location}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container section mission">
        <Reveal>
          <h2>Our Mission</h2>
          <p>We exist to love God, love people and make disciples through worship, teaching and service.</p>
        </Reveal>
      </section>

    </div>
  )
}

export default Home
