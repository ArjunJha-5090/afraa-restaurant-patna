'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const beverages = [
  {
    name: 'Virgin Mojito',
    category: 'Classic Mocktail',
    description: 'Fresh mint, lime wedges, simple syrup, topped with sparkling water or sprite',
    price: '₹245',
    profile: 'Minty & Refreshing',
    color: 'from-green-950 to-emerald-950',
    accent: '#6B9B8A',
    icon: '🌿'
  },
  {
    name: 'Blue Lagoon',
    category: 'Signature Mocktail',
    description: 'Blue curaçao syrup, fresh lime juice, crushed ice, lemonade',
    price: '₹225',
    profile: 'Citrus & Sweet',
    color: 'from-blue-950 to-cyan-950',
    accent: '#5B9BD5',
    icon: '🌊'
  },
  {
    name: 'Fresh Lime Soda',
    category: 'Refresher',
    description: 'Freshly squeezed lime, sweet or salted, topped with chilled soda',
    price: '₹145',
    profile: 'Tangy & Salty',
    color: 'from-yellow-950 to-orange-950',
    accent: '#E8C98A',
    icon: '🍋'
  },
  {
    name: 'Classic Cold Coffee',
    category: 'Shakes & Frappes',
    description: 'Blended espresso, creamy milk, vanilla ice cream, chocolate drizzle',
    price: '₹295',
    profile: 'Rich & Creamy',
    color: 'from-amber-950 to-yellow-950',
    accent: '#B87333',
    icon: '☕'
  },
  {
    name: 'Watermelon Basil Smash',
    category: 'Fruity',
    description: 'Muddled fresh watermelon, basil leaves, citrus blend',
    price: '₹275',
    profile: 'Fruity & Herbal',
    color: 'from-red-950 to-rose-950',
    accent: '#D4A0B0',
    icon: '🍉'
  },
  {
    name: 'Oreo Milkshake',
    category: 'Shakes',
    description: 'Crushed Oreo cookies, vanilla ice cream, whipped cream, chocolate sauce',
    price: '₹345',
    profile: 'Sweet & Indulgent',
    color: 'from-gray-900 to-black',
    accent: '#9B7DB8',
    icon: '🍪'
  },
];

function BeverageCard({ beverage, index }: { beverage: typeof beverages[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        cursor: 'pointer',
        transform: hovered
          ? `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(10px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.6s ease',
        transformStyle: 'preserve-3d'
      }}
    >
      <div style={{
        background: hovered
          ? `linear-gradient(135deg, ${beverage.accent}15 0%, rgba(20,16,14,0.8) 100%)`
          : 'linear-gradient(135deg, rgba(20,16,14,0.5), rgba(15,12,10,0.8))',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${hovered ? beverage.accent : 'rgba(200,168,107,0.1)'}`,
        padding: 40,
        transition: 'all 0.5s cubic-bezier(0.23,1,0.32,1)',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${beverage.accent}20` : 'none'
      }}>
        {/* Top: category & price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10, letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: beverage.accent,
            fontWeight: 400
          }}>{beverage.category}</span>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 18, color: '#C8A86B', fontWeight: 600
          }}>{beverage.price}</span>
        </div>

        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 1.2 : 1 }}
          transition={{ duration: 0.4 }}
          style={{
            width: 80, height: 80, borderRadius: '50%',
            border: `1px solid ${hovered ? beverage.accent : 'rgba(200,168,107,0.15)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 28,
            background: hovered ? `${beverage.accent}10` : 'transparent',
            transition: 'all 0.4s ease',
            boxShadow: hovered ? `0 0 30px ${beverage.accent}30` : 'none'
          }}
        >
          <span style={{ fontSize: 28, filter: hovered ? 'drop-shadow(0 0 10px rgba(200,168,107,0.5))' : 'none' }}>
            {beverage.icon}
          </span>
        </motion.div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 26, fontWeight: 700,
          color: hovered ? '#F0E6D0' : 'rgba(250,246,238,0.85)',
          marginBottom: 12,
          transition: 'color 0.3s ease',
          lineHeight: 1.2
        }}>{beverage.name}</h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13, lineHeight: 1.7,
          color: 'rgba(250,246,238,0.45)',
          fontWeight: 300,
          marginBottom: 28
        }}>{beverage.description}</p>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11, color: 'rgba(200,168,107,0.4)',
            letterSpacing: '0.15em'
          }}>{beverage.profile}</span>

          <motion.div
            animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: beverage.accent,
              display: 'flex', alignItems: 'center', gap: 6
            }}
          >
            Order →
          </motion.div>
        </div>

        {/* Glow line on hover */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${beverage.accent}, transparent)`,
            transformOrigin: 'center'
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Beverages() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="beverages" className="py-20 lg:py-40 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #0F0C0A 50%, #0A0A0A 100%)' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(200,168,107,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 100 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 24 }}
          >
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.6))' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A86B' }}>
              The Beverage Bar
            </span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, rgba(200,168,107,0.6), transparent)' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            transition={{ delay: 0.15, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 700, lineHeight: 1.1,
              color: 'rgba(250,246,238,0.95)',
              marginBottom: 20
            }}
          >
            Artisanal <em style={{ fontStyle: 'italic', color: '#C8A86B' }}>Mocktails</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            transition={{ delay: 0.3, duration: 0.9 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20, fontStyle: 'italic',
              color: 'rgba(250,246,238,0.45)',
              fontWeight: 300, maxWidth: 500, margin: '0 auto'
            }}
          >
            Each zero-proof creation is a narrative — meticulously crafted, beautifully presented
          </motion.p>
        </div>

        {/* Beverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beverages.map((beverage, i) => (
            <BeverageCard key={beverage.name} beverage={beverage} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ textAlign: 'center', marginTop: 80 }}
        >
          <button
            className="btn-luxury"
            style={{
              padding: '18px 60px',
              border: '1px solid rgba(200,168,107,0.3)',
              background: 'transparent',
              color: '#C8A86B',
              fontFamily: "'Inter', sans-serif",
              fontSize: 12, letterSpacing: '0.3em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 400,
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(200,168,107,0.08)';
              e.currentTarget.style.borderColor = '#C8A86B';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(200,168,107,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(200,168,107,0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View Full Bar Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
