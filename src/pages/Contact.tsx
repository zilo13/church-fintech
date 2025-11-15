import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Demo form — please configure backend to send messages.\n' + JSON.stringify(form))
  }

  return (
    <div className="container section">
      <h2>Contact</h2>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <label>
            Name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            Email
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label>
            Message
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <h3>Address</h3>
          <p>123 Lighthouse Ave, Demo City</p>
          <h3>WhatsApp</h3>
          <p><a href="https://wa.me/1234567890" target="_blank">Chat on WhatsApp</a></p>

          <h3>Map</h3>
          <iframe loading="lazy" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531698!3d-37.81720974202156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3e6b7b1%3A0x5045675218ce840!2sDemo!5e0!3m2!1sen!2sus!4v1539940411705" width="100%" height="200" style={{border:0}} />
        </div>
      </div>
    </div>
  )
}

export default Contact
