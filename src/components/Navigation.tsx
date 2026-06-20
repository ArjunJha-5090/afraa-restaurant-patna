'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['About', 'Menu', 'Beverages', 'Gallery', 'Events', 'Reservations'];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '16px 48px' : '28px 48px',
          transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1)',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(30px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(30px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,168,107,0.1)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #9A7A4A, #C8A86B, #E8C98A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600
          }}>
            Afraa
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}
          className="hidden md:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(250,246,238,0.6)',
                fontWeight: 400,
                transition: 'color 0.3s ease',
                padding: '4px 0',
                position: 'relative'
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.color = '#C8A86B';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.color = 'rgba(250,246,238,0.6)';
              }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo('Reservations')}
          className="btn-luxury hidden md:flex"
          style={{
            border: '1px solid rgba(200,168,107,0.4)',
            background: 'transparent',
            padding: '10px 28px',
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8A86B',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            alignItems: 'center', gap: 8
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.background = 'rgba(200,168,107,0.1)';
            el.style.borderColor = '#C8A86B';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.background = 'transparent';
            el.style.borderColor = 'rgba(200,168,107,0.4)';
          }}
        >
          Reserve
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ height: 1, background: menuOpen ? '#C8A86B' : 'rgba(250,246,238,0.8)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ height: 1, background: menuOpen ? 'transparent' : 'rgba(250,246,238,0.8)', display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ height: 1, background: menuOpen ? '#C8A86B' : 'rgba(250,246,238,0.8)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </div>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(40px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 32
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 36, color: 'rgba(250,246,238,0.8)',
                  letterSpacing: '0.05em'
                }}
              >
                {link}
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              onClick={() => scrollTo('Reservations')}
              style={{
                marginTop: 24,
                border: '1px solid #C8A86B',
                background: 'rgba(200,168,107,0.1)',
                padding: '16px 40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#C8A86B',
                cursor: 'pointer',
                borderRadius: 4
              }}
            >
              Reserve A Table
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
