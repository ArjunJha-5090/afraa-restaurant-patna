'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Reservation() {
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '', occasion: '', notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(200,168,107,0.15)',
    borderRadius: 0,
    padding: '18px 20px',
    color: 'rgba(250,246,238,0.85)',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 300,
    outline: 'none',
    transition: 'all 0.3s ease',
    appearance: 'none' as const,
    WebkitAppearance: 'none' as const,
    cursor: 'pointer'
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 10,
    letterSpacing: '0.25em',
    textTransform: 'uppercase' as const,
    color: 'rgba(200,168,107,0.6)',
    display: 'block',
    marginBottom: 8,
    fontWeight: 400
  };

  const occasions = ['Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Celebration', 'Other'];
  const times = ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM'];

  return (
    <section id="reservations" className="py-20 lg:py-40 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Background radial */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 40%, rgba(200,168,107,0.05) 0%, transparent 60%)'
      }} />

      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(200,168,107,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,107,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div ref={ref} className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 24 }}
          >
            <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.6))' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A86B' }}>
              Reservations
            </span>
            <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, rgba(200,168,107,0.6), transparent)' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            transition={{ delay: 0.15, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 700, lineHeight: 1.1,
              color: 'rgba(250,246,238,0.95)',
              marginBottom: 20
            }}
          >
            Reserve Your<br />
            <em style={{ fontStyle: 'italic', color: '#C8A86B' }}>Experience</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, fontStyle: 'italic',
              color: 'rgba(250,246,238,0.45)',
              fontWeight: 300, maxWidth: 500, margin: '0 auto'
            }}
          >
            Secure your table at Mumbai's most exclusive cocktail bar and dining destination
          </motion.p>
        </div>

        {/* Form container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
          transition={{ delay: 0.4, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{
            background: 'linear-gradient(135deg, rgba(26,22,20,0.6) 0%, rgba(15,12,10,0.8) 100%)',
            border: '1px solid rgba(200,168,107,0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          className="p-8 lg:p-[72px_80px]"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px 0' }}
            >
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                border: '1px solid rgba(200,168,107,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 32px',
                background: 'rgba(200,168,107,0.05)'
              }}>
                <span style={{ color: '#C8A86B', fontSize: 28 }}>✓</span>
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 36, fontWeight: 700,
                color: 'rgba(250,246,238,0.95)',
                marginBottom: 16
              }}>Reservation Received</h3>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20, fontStyle: 'italic',
                color: 'rgba(250,246,238,0.5)'
              }}>
                Our team will confirm your booking within 2 hours.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, color: '#C8A86B',
                marginTop: 24, letterSpacing: '0.2em', textTransform: 'uppercase'
              }}>
                Welcome to Afraa
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Name */}
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,168,107,0.4)'; e.target.style.background = 'rgba(200,168,107,0.02)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(200,168,107,0.15)'; e.target.style.background = 'rgba(255,255,255,0.02)'; }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,168,107,0.4)'; e.target.style.background = 'rgba(200,168,107,0.02)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(200,168,107,0.15)'; e.target.style.background = 'rgba(255,255,255,0.02)'; }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,168,107,0.4)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(200,168,107,0.15)'; }}
                  />
                </div>

                {/* Guests */}
                <div>
                  <label style={labelStyle}>Number of Guests</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, background: 'rgba(10,10,10,0.95)', color: form.guests ? 'rgba(250,246,238,0.85)' : 'rgba(250,246,238,0.3)' }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,168,107,0.4)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(200,168,107,0.15)'; }}
                  >
                    <option value="" disabled>Select guests</option>
                    {[1,2,3,4,5,6,7,8,'9+'].map(n => (
                      <option key={n} value={n} style={{ background: '#1A1614' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,168,107,0.4)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(200,168,107,0.15)'; }}
                  />
                </div>

                {/* Time */}
                <div>
                  <label style={labelStyle}>Preferred Time</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, background: 'rgba(10,10,10,0.95)', color: form.time ? 'rgba(250,246,238,0.85)' : 'rgba(250,246,238,0.3)' }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(200,168,107,0.4)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(200,168,107,0.15)'; }}
                  >
                    <option value="" disabled>Select time</option>
                    {times.map(t => (
                      <option key={t} value={t} style={{ background: '#1A1614' }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div style={{ marginBottom: 32 }}>
                <label style={labelStyle}>Special Occasion</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {occasions.map(occ => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setForm(prev => ({ ...prev, occasion: occ }))}
                      style={{
                        padding: '10px 20px',
                        border: `1px solid ${form.occasion === occ ? '#C8A86B' : 'rgba(200,168,107,0.2)'}`,
                        background: form.occasion === occ ? 'rgba(200,168,107,0.1)' : 'transparent',
                        color: form.occasion === occ ? '#C8A86B' : 'rgba(250,246,238,0.4)',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11, letterSpacing: '0.15em',
                        textTransform: 'uppercase', cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >{occ}</button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div style={{ marginBottom: 48 }}>
                <label style={labelStyle}>Special Requests</label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Dietary requirements, seating preferences, special arrangements..."
                  value={form.notes}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: 100,
                    fontFamily: "'Inter', sans-serif"
                  }}
                  onFocus={e => { e.target.style.borderColor = 'rgba(200,168,107,0.4)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(200,168,107,0.15)'; }}
                />
              </div>

              {/* Submit */}
              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  className="btn-luxury"
                  style={{
                    padding: '20px 80px',
                    background: 'linear-gradient(135deg, rgba(200,168,107,0.15), rgba(200,168,107,0.05))',
                    border: '1px solid rgba(200,168,107,0.4)',
                    color: '#E8C98A',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12, letterSpacing: '0.35em',
                    textTransform: 'uppercase', cursor: 'pointer',
                    fontWeight: 400, transition: 'all 0.5s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,168,107,0.25), rgba(200,168,107,0.1))';
                    e.currentTarget.style.borderColor = '#C8A86B';
                    e.currentTarget.style.boxShadow = '0 0 50px rgba(200,168,107,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,168,107,0.15), rgba(200,168,107,0.05))';
                    e.currentTarget.style.borderColor = 'rgba(200,168,107,0.4)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Confirm Reservation
                </button>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, color: 'rgba(250,246,238,0.3)',
                  marginTop: 20, fontWeight: 300, letterSpacing: '0.1em'
                }}>
                  No card required · Confirmation within 2 hours
                </p>
              </div>
            </form>
          )}
        </motion.div>

        {/* Contact info below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px mt-px"
        >
          {[
            { label: 'Call Us', value: '+91 22 6611 2200', icon: '✆' },
            { label: 'Email', value: 'reserve@bodegemumbai.com', icon: '✉' },
            { label: 'Hours', value: 'Daily · 6 PM – 2 AM', icon: '◷' },
          ].map(item => (
            <div key={item.label} style={{
              padding: '32px 40px',
              background: 'rgba(26,22,20,0.4)',
              border: '1px solid rgba(200,168,107,0.07)',
              textAlign: 'center'
            }}>
              <p style={{ color: '#C8A86B', fontSize: 20, marginBottom: 12 }}>{item.icon}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10, letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(200,168,107,0.5)', marginBottom: 8
              }}>{item.label}</p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 17, color: 'rgba(250,246,238,0.65)',
                fontStyle: 'italic'
              }}>{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
