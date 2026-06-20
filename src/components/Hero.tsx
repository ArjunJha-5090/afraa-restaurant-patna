'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const words = ['Craft Cocktails.', 'Elevated Dining.', 'Unforgettable Nights.'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      el.style.transform = `translateY(${scrolled * 0.4}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToReserve = () => {
    document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background */}
      <div ref={heroRef} style={{ position: 'absolute', inset: '-20%', willChange: 'transform' }}>
        {/* Background photo */}
        <Image
          src="/patna-hero.png"
          alt="Afraa Patna lounge interior with historic view"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }}
        />
        {/* Cinematic dark luxury gradient background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 40%, rgba(200,168,107,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(184,115,51,0.06) 0%, transparent 50%), linear-gradient(135deg, rgba(10,10,10,0.6) 0%, rgba(26,22,20,0.4) 40%, rgba(10,10,10,0.6) 100%)'
        }} />
        {/* Atmospheric particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: i % 2 === 0 ? 300 : 200,
              height: i % 2 === 0 ? 300 : 200,
              borderRadius: '50%',
              background: i % 3 === 0
                ? 'radial-gradient(circle, rgba(200,168,107,0.07) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(184,115,51,0.05) 0%, transparent 70%)',
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -30, 15, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Overlay gradients */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.7) 80%, rgba(10,10,10,0.98) 100%)'
      }} />

      {/* Decorative lines */}
      <div style={{ position: 'absolute', left: '5%', top: '15%', width: 1, height: '40%', background: 'linear-gradient(180deg, transparent, rgba(200,168,107,0.4), transparent)' }} />
      <div style={{ position: 'absolute', right: '5%', top: '15%', width: 1, height: '40%', background: 'linear-gradient(180deg, transparent, rgba(200,168,107,0.4), transparent)' }} />
      <div style={{ position: 'absolute', top: '12%', left: '50%', transform: 'translateX(-50%)', width: 1, height: 60, background: 'linear-gradient(180deg, transparent, rgba(200,168,107,0.5))' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 1000, width: '100%' }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32
          }}
        >
          <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.6))' }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#C8A86B',
            fontWeight: 400
          }}>
            City Centre Mall · Patna
          </span>
          <div style={{ width: 40, height: 1, background: 'linear-gradient(90deg, rgba(200,168,107,0.6), transparent)' }} />
        </motion.div>

        {/* Main Title */}
        <div style={{ overflow: 'hidden', marginBottom: 16 }}>
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.0, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(60px, 12vw, 140px)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, rgba(250,246,238,0.95) 0%, rgba(200,168,107,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Afraa
          </motion.h1>
        </div>

        {/* Subtitle line */}
        <div style={{ overflow: 'hidden', marginBottom: 12 }}>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(14px, 2vw, 20px)',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#C8A86B',
              fontWeight: 300
            }}
          >
            Cocktail Bar · Kitchen
          </motion.p>
        </div>

        {/* Rotating tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 56, overflow: 'hidden' }}
        >
          <motion.p
            key={wordIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(18px, 3vw, 26px)',
              color: 'rgba(250,246,238,0.7)',
              fontStyle: 'italic',
              fontWeight: 300
            }}
          >
            {words[wordIndex]}
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          {/* Primary CTA - Glassmorphism */}
          <button
            onClick={scrollToReserve}
            className="btn-luxury"
            style={{
              padding: '18px 48px',
              background: 'linear-gradient(135deg, rgba(200,168,107,0.15), rgba(200,168,107,0.05))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(200,168,107,0.4)',
              color: '#E8C98A',
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 400,
              transition: 'all 0.5s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,168,107,0.25), rgba(200,168,107,0.1))';
              e.currentTarget.style.borderColor = '#C8A86B';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(200,168,107,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,168,107,0.15), rgba(200,168,107,0.05))';
              e.currentTarget.style.borderColor = 'rgba(200,168,107,0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Reserve Table
          </button>

          {/* Secondary CTA */}
          <button
            onClick={scrollToMenu}
            className="btn-luxury"
            style={{
              padding: '18px 48px',
              background: 'transparent',
              border: '1px solid rgba(250,246,238,0.2)',
              color: 'rgba(250,246,238,0.7)',
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 300,
              transition: 'all 0.5s ease',
              display: 'flex', alignItems: 'center', gap: 10
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(200,168,107,0.4)';
              e.currentTarget.style.color = '#C8A86B';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(250,246,238,0.2)';
              e.currentTarget.style.color = 'rgba(250,246,238,0.7)';
            }}
          >
            Explore Menu
            <span style={{ fontSize: 16, letterSpacing: 0 }}>→</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
        style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12
        }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 10, letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(200,168,107,0.5)',
          fontWeight: 300
        }}>Scroll</span>
        <div style={{ width: 1, height: 50, background: 'linear-gradient(180deg, rgba(200,168,107,0.5), transparent)', position: 'relative' }}>
          <motion.div
            style={{ width: 1, height: 20, background: '#C8A86B', position: 'absolute', top: 0 }}
            animate={{ y: [0, 30] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Corner text decorations */}
      <div className="hidden md:block" style={{
        position: 'absolute', bottom: 40, left: 48,
        fontFamily: "'Inter', sans-serif",
        fontSize: 10, letterSpacing: '0.2em',
        color: 'rgba(200,168,107,0.3)',
        textTransform: 'uppercase', fontWeight: 300
      }}>
        Patna, Bihar
      </div>
      <div className="hidden md:block" style={{
        position: 'absolute', bottom: 40, right: 48,
        fontFamily: "'Inter', sans-serif",
        fontSize: 10, letterSpacing: '0.2em',
        color: 'rgba(200,168,107,0.3)',
        textTransform: 'uppercase', fontWeight: 300
      }}>
        Open Daily · 6PM–2AM
      </div>
    </section>
  );
}
