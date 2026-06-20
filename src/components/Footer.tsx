'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#050403', borderTop: '1px solid rgba(200,168,107,0.08)', position: 'relative', overflow: 'hidden' }}>
      {/* Top glow line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.3), transparent)' }} />

      {/* Main footer content */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 80, marginBottom: 80 }}>
          {/* Brand column */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 36, fontWeight: 700,
              background: 'linear-gradient(135deg, #9A7A4A, #C8A86B, #E8C98A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 20,
              letterSpacing: '0.05em'
            }}>Afraa</h2>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 16, fontStyle: 'italic',
              color: 'rgba(250,246,238,0.4)',
              lineHeight: 1.7, marginBottom: 32,
              fontWeight: 300
            }}>
              Craft Cocktails. Elevated Dining.<br />Unforgettable Nights.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { label: 'Instagram', icon: '◉' },
                { label: 'Facebook', icon: '◈' },
                { label: 'Twitter', icon: '◎' },
              ].map(social => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: 40, height: 40,
                    border: '1px solid rgba(200,168,107,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(200,168,107,0.5)',
                    textDecoration: 'none', fontSize: 14,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#C8A86B';
                    e.currentTarget.style.color = '#C8A86B';
                    e.currentTarget.style.background = 'rgba(200,168,107,0.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,168,107,0.2)';
                    e.currentTarget.style.color = 'rgba(200,168,107,0.5)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#C8A86B',
              marginBottom: 28, fontWeight: 400
            }}>Navigate</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['About', 'Menu', 'Cocktails', 'Gallery', 'Events'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, color: 'rgba(250,246,238,0.4)',
                    textDecoration: 'none', fontWeight: 300,
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C8A86B'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(250,246,238,0.4)'; }}
                >{link}</a>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#C8A86B',
              marginBottom: 28, fontWeight: 400
            }}>Experience</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Private Dining', 'DJ Nights', 'Jazz Evenings', 'Cocktail Classes', 'Corporate Events'].map(item => (
                <a
                  key={item}
                  href="#events"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, color: 'rgba(250,246,238,0.4)',
                    textDecoration: 'none', fontWeight: 300,
                    letterSpacing: '0.05em',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C8A86B'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(250,246,238,0.4)'; }}
                >{item}</a>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#C8A86B',
              marginBottom: 28, fontWeight: 400
            }}>Visit</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,168,107,0.4)', marginBottom: 8
                }}>Address</p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 15, color: 'rgba(250,246,238,0.5)',
                  fontStyle: 'italic', lineHeight: 1.7
                }}>
                  City Centre Mall<br />
                  Lodipur, Patna<br />
                  Bihar 800001
                </p>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,168,107,0.4)', marginBottom: 8
                }}>Hours</p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 15, color: 'rgba(250,246,238,0.5)',
                  fontStyle: 'italic', lineHeight: 1.7
                }}>
                  Daily · 6 PM – 2 AM<br />
                  Bar Open till Close
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.2), transparent)', marginBottom: 40 }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: 'rgba(250,246,238,0.2)',
            letterSpacing: '0.1em', fontWeight: 300
          }}>
            © {currentYear} Afraa – Restaurant & Lounge. All Rights Reserved.
          </p>

          <div style={{ display: 'flex', gap: 32 }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, color: 'rgba(250,246,238,0.2)',
                  textDecoration: 'none', letterSpacing: '0.1em',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(200,168,107,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(250,246,238,0.2)'; }}
              >{item}</a>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'none',
              border: '1px solid rgba(200,168,107,0.2)',
              color: 'rgba(200,168,107,0.6)',
              padding: '10px 24px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 10, letterSpacing: '0.25em',
              textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#C8A86B';
              e.currentTarget.style.color = '#C8A86B';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(200,168,107,0.2)';
              e.currentTarget.style.color = 'rgba(200,168,107,0.6)';
            }}
          >
            Reserve →
          </button>
        </div>
      </div>
    </footer>
  );
}
