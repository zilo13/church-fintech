import React from 'react'

const About: React.FC = () => {
  return (
    <div className="container section">
      <h2>About Us</h2>
      <section className="about-grid">
        <div>
          <h3>Our History</h3>
          <p>Founded to serve the city and plant churches, Grace Lighthouse Ministry has grown into a multi-generational community focused on worship and discipleship.</p>
        </div>
        <div>
          <h3>Leadership</h3>
          <p>Lead Pastor: Rev. Samuel Bright</p>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=60&auto=format&fit=crop" alt="Pastor" style={{width:200,borderRadius:8}} />
        </div>
      </section>

      <section className="ministries">
        <h3>Ministries</h3>
        <ul>
          <li>Youth Ministry</li>
          <li>Women</li>
          <li>Choir</li>
          <li>Kids</li>
        </ul>
      </section>
    </div>
  )
}

export default About
