import React from 'react'

const Live: React.FC = () => {
  return (
    <div className="container section">
      <h2>Live Stream</h2>
      <p>Watch our live services below.</p>
      <div className="video-wrap">
        <iframe loading="lazy" title="live" src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig" frameBorder={0} allowFullScreen />
      </div>
    </div>
  )
}

export default Live
