'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    day: 'FRI',
    title: 'Black Friday Sessions',
    desc: 'Weekly electronic and deep house sets by Mumbai\'s finest DJs. Immersive sound design meets cocktail excellence.',
    time: '10PM — 2AM',
    tag: 'DJ Night',
    color: '#C8A86B',
    recurring: 'Every Friday'
  },
  {
    day: 'SAT',
    title: 'Jazz & Noir Evenings',
    desc: 'Live jazz quartet curated for the discerning ear. Intimate, soulful, atmospheric — perfect for late-night dining.',
    time: '8PM — 12AM',
    tag: 'Live Music',
    color: '#9B7DB8',
    recurring: 'Every Saturday'
  },
  {
    day: 'MON',
    title: 'Cocktail Masterclass',
    desc: 'Private sessions with our head mixologist. Learn the craft behind our signature creations — exclusive groups of 12.',
    time: '7PM — 10PM',
    tag: 'Experience',
    color: '#6B9B8A',
    recurring: 'Select Mondays'
  },
  {
    day: '—',
    title: 'Private Events',
    desc: 'Exclusive buyouts, corporate gatherings, milestone celebrations. Afraa transforms into your personal venue.',
    time: 'By Appointment',
    tag: 'Private Hire',
    color: '#B87333',
    recurring: 'Upon Request'
  },
];

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="events" style={{ padding: '160px 0', background: '#080806', position: 'relative', overflow: 'hidden' }}>
      {/* Atmospheric glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200, height: 600,
        background: 'radial-gradient(ellipse, rgba(200,168,107,0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 200 + i * 80,
            height: 200 + i * 80,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(200,168,107,0.03) 0%, transparent 70%)`,
            left: `${10 + i * 25}%`,
            top: `${20 + (i % 2) * 40}%`,
            pointerEvents: 'none'
          }}
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        />
      ))}

      <div ref={ref} style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 100 }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}
            >
              <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.6))' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A86B' }}>Nightlife</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
              transition={{ delay: 0.15, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700, lineHeight: 1.1,
                color: 'rgba(250,246,238,0.95)'
              }}
            >
              Where Nights<br />
              <em style={{ fontStyle: 'italic', color: '#C8A86B' }}>Come Alive</em>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, fontStyle: 'italic',
              color: 'rgba(250,246,238,0.5)', lineHeight: 1.7,
              fontWeight: 300
            }}>
              Afraa's event calendar is a curated collection of experiences — from underground DJ sets to intimate jazz evenings and exclusive private affairs.
            </p>
          </motion.div>
        </div>

        {/* Events grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              style={{
                padding: '48px',
                border: '1px solid rgba(200,168,107,0.1)',
                background: 'linear-gradient(135deg, rgba(20,16,14,0.5), rgba(12,10,8,0.8))',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.5s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = event.color + '40';
                e.currentTarget.style.background = `linear-gradient(135deg, ${event.color}15, rgba(16,14,12,0.85))`;
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${event.color}10`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(200,168,107,0.1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(20,16,14,0.5), rgba(12,10,8,0.8))';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Large day indicator */}
              <div style={{
                position: 'absolute', right: 40, top: 40,
                fontFamily: "'Playfair Display', serif",
                fontSize: 80, fontWeight: 700,
                color: event.color + '10',
                lineHeight: 1, letterSpacing: '-0.05em',
                userSelect: 'none'
              }}>{event.day}</div>

              {/* Tag */}
              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                border: `1px solid ${event.color}40`,
                marginBottom: 24
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10, letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: event.color, fontWeight: 400
                }}>{event.tag}</span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28, fontWeight: 700,
                color: 'rgba(250,246,238,0.9)',
                marginBottom: 16, lineHeight: 1.2
              }}>{event.title}</h3>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14, lineHeight: 1.7,
                color: 'rgba(250,246,238,0.45)',
                fontWeight: 300, marginBottom: 36
              }}>{event.desc}</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11, letterSpacing: '0.15em',
                    color: event.color, marginBottom: 4
                  }}>{event.recurring}</p>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 16, color: 'rgba(250,246,238,0.5)',
                    fontStyle: 'italic'
                  }}>{event.time}</p>
                </div>

                <button style={{
                  background: 'none',
                  border: `1px solid ${event.color}40`,
                  color: event.color,
                  padding: '12px 24px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, letterSpacing: '0.2em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = event.color + '15';
                    e.currentTarget.style.borderColor = event.color;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.borderColor = event.color + '40';
                  }}
                >Enquire</button>
              </div>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                background: `linear-gradient(90deg, transparent, ${event.color}40, transparent)`
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
