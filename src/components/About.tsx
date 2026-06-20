'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px' },
  transition: { delay, duration: 0.9, ease: 'easeOut' as const }
});

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="about" className="py-20 lg:py-40 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(200,168,107,0.04) 0%, transparent 60%)'
      }} />

      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 80 }}>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.6))' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A86B', fontWeight: 400 }}>Our Story</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2 {...fadeUp(0.1)} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 700, lineHeight: 1.1,
              marginBottom: 32, color: 'rgba(250,246,238,0.95)'
            }}>
              Where Every Night<br />
              <em style={{ fontStyle: 'italic', color: '#C8A86B' }}>Becomes a Story</em>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22, lineHeight: 1.7,
              color: 'rgba(250,246,238,0.6)',
              fontWeight: 300, marginBottom: 24, fontStyle: 'italic'
            }}>
              "Afraa was born from a singular vision — to create a space where premium cocktail culture meets the art of elevated dining."
            </motion.p>

            <motion.p {...fadeUp(0.3)} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15, lineHeight: 1.8,
              color: 'rgba(250,246,238,0.5)',
              fontWeight: 300, marginBottom: 40
            }}>
              Nestled in City Centre Mall, Lodipur, Afraa has redefined the lounge experience. Our master mixologists craft each drink as a work of art — balancing heritage spirits with avant-garde techniques. Our kitchen curates a menu that celebrates bold flavors, seasonal ingredients, and culinary mastery.
            </motion.p>

            {/* Stats */}
            <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 48 }}>
              {[
                { num: '50+', label: 'Signature Cocktails' },
                { num: '5★', label: 'Dining Experience' },
                { num: '200+', label: 'Premium Spirits' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#C8A86B', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,246,238,0.4)', marginTop: 8, fontWeight: 300 }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-[400px] lg:h-[600px] mt-10 lg:mt-0">
            <motion.div style={{ y: y1 }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ delay: 0.2, duration: 1.1, ease: 'easeOut' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 60, right: 0, height: 420,
                border: '1px solid rgba(200,168,107,0.15)',
                overflow: 'hidden',
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80"
                  alt="Craft cocktail being mixed by bartender"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(10,8,6,0.3) 0%, rgba(10,8,6,0.1) 60%, rgba(10,8,6,0.5) 100%)'
                }} />
                <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(200,168,107,0.85)', fontStyle: 'italic' }}>The Art of Craft</span>
                </div>
              </div>
            </motion.div>

            <motion.div style={{ y: y2 }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ delay: 0.35, duration: 1.1, ease: 'easeOut' }}
            >
              <div style={{
                position: 'absolute', bottom: 0, left: 0, width: 240, height: 220,
                background: 'linear-gradient(135deg, #1A1614, #2A2220)',
                border: '1px solid rgba(200,168,107,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8
              }}>
                <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'rgba(200,168,107,0.1)', border: '1px solid rgba(200,168,107,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#C8A86B', fontSize: 20 }}>✦</span>
                </div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#C8A86B', textAlign: 'center' }}>5★</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,246,238,0.4)', textAlign: 'center' }}>Rated Experience</p>
              </div>
            </motion.div>

            <div style={{ position: 'absolute', right: 0, top: 100, width: 1, height: 200, background: 'linear-gradient(180deg, transparent, rgba(200,168,107,0.4), transparent)' }} />
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div {...fadeUp(0.3)} className="mt-20 lg:mt-32 p-8 lg:p-[60px] border-t border-b border-[#C8A86B]/10 text-center">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 3vw, 32px)', fontStyle: 'italic', color: 'rgba(250,246,238,0.6)', fontWeight: 300, lineHeight: 1.5, maxWidth: 800, margin: '0 auto' }}>
            "We believe the best conversations happen over the finest cocktails and cuisine — Afraa is where those moments are born."
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C8A86B', marginTop: 24, fontWeight: 300 }}>
            — Rahul Sharma, Founder & Executive Chef
          </p>
        </motion.div>
      </div>
    </section>
  );
}
