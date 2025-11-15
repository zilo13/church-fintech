import React from 'react'

const Give: React.FC = () => {
  return (
    <div className="container section">
      <h2>Give / Donate</h2>
      <p>Support the ministry via mobile money or PayPal. For now use the contact option if you need help.</p>

      <div className="donation-options">
        <div className="card">
          <h3>Mobile Money</h3>
          <p>MTN: +123 456 7890</p>
          <p>Orange: +123 456 7891</p>
        </div>
        <div className="card">
          <h3>PayPal</h3>
          <p><a href="#">Donate via PayPal (demo)</a></p>
        </div>
        <div className="card">
          <h3>Contact to Give</h3>
          <p>If you prefer, <a href="/contact">contact us</a> to arrange a gift.</p>
        </div>
      </div>
    </div>
  )
}

export default Give
