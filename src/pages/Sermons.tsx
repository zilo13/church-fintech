import React, { useState } from 'react'

type Sermon = { id: number; title: string; youtubeId?: string; audioUrl?: string; series?: string }

const DATA: Sermon[] = [
  { id: 1, title: 'Faith Over Fear', youtubeId: 'dQw4w9WgXcQ', series: 'Faith' },
  { id: 2, title: 'Prayer That Moves', youtubeId: 'V-_O7nl0Ii0', series: 'Prayer' },
  { id: 3, title: 'Family Matters', youtubeId: 'eVTXPUF4Oz4', series: 'Family' }
]

const Sermons: React.FC = () => {
  const [query, setQuery] = useState('')

  const filtered = DATA.filter((s) => s.title.toLowerCase().includes(query.toLowerCase()) || (s.series || '').toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="container section">
      <h2>Sermons</h2>
      <div className="search-row">
        <input placeholder="Search sermons or series" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      <div className="sermon-grid">
        {filtered.map((s) => (
          <div key={s.id} className="sermon-card">
            {s.youtubeId ? (
              <div className="video-wrap">
                <iframe loading="lazy" title={s.title} src={`https://www.youtube.com/embed/${s.youtubeId}`} frameBorder={0} allowFullScreen />
              </div>
            ) : null}
            <h3>{s.title}</h3>
            <p className="muted">Series: {s.series}</p>
            {s.audioUrl ? <audio controls src={s.audioUrl} /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sermons
