'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px' },
  transition: { delay, duration: 0.9, ease: 'easeOut' as const }
});

const menuSections = [
  {
    title: 'Appetizers',
    items: [
      { name: 'Tibetan Vegetable Momo', desc: 'Steamed dumplings, spicy tomato-sesame chutney', price: '₹345' },
      { name: 'Peeli Mirch Paneer Tikka', desc: 'Yellow chili marinated cottage cheese, clay oven roasted', price: '₹425' },
      { name: 'Drums Of Heaven', desc: 'Crispy chicken wings tossed in spicy garlic sauce', price: '₹475' },
      { name: 'Schezwan Style Chilli Paneer', desc: 'Wok-tossed paneer, peppers, homemade Schezwan sauce', price: '₹425' },
    ]
  },
  {
    title: 'Main Course',
    items: [
      { name: 'Mutton Kosha', desc: 'Slow-cooked tender mutton, rich Bengali-style dark gravy', price: '₹695' },
      { name: 'Chicken Kadhai', desc: 'Spiced chicken, bell peppers, robust tomato gravy', price: '₹595' },
      { name: 'Chicken Hakka Noodles', desc: 'Wok-tossed noodles, shredded chicken, Asian greens', price: '₹445' },
      { name: 'Afraa Special Dal Makhani', desc: 'Slow-simmered black lentils, fresh cream, butter', price: '₹395' },
    ]
  },
  {
    title: 'Staples & Sides',
    items: [
      { name: 'Cheese Garlic Naan', desc: 'Tandoori bread stuffed with cheese and garlic', price: '₹145' },
      { name: 'Awadhi Chicken Biryani', desc: 'Aromatic basmati rice, saffron, slow-cooked chicken', price: '₹545' },
      { name: 'Steamed Basmati Rice', desc: 'Fragrant long-grain steamed rice', price: '₹225' },
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Classic Tiramisu', desc: 'Mascarpone, espresso, cocoa dusting', price: '₹425' },
      { name: 'Hot Chocolate Brownie', desc: 'Served sizzling with vanilla bean ice cream', price: '₹395' },
    ]
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Appetizers');
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="menu" className="py-20 lg:py-40 relative" style={{ background: '#0A0A0A' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 60%, rgba(200,168,107,0.04) 0%, transparent 50%)'
      }} />

      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-12 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}
            >
              <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.6))' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A86B' }}>The Kitchen</span>
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
              A Culinary<br />
              <em style={{ fontStyle: 'italic', color: '#C8A86B' }}>Journey</em>
            </motion.h2>
          </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="mt-8 lg:mt-20"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20, lineHeight: 1.7,
                color: 'rgba(250,246,238,0.5)',
                fontStyle: 'italic', fontWeight: 300
              }}
            >
            Our kitchen speaks the language of seasons. Every dish is a collaboration between heritage techniques and modern artistry — crafted to accompany Afraa's exceptional dining experience.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="flex overflow-x-auto whitespace-nowrap gap-1 mb-10 lg:mb-16 border-b border-[#C8A86B]/10 pb-0"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {menuSections.map(section => (
            <button
              key={section.title}
              onClick={() => setActiveCategory(section.title)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: activeCategory === section.title ? '#C8A86B' : 'rgba(250,246,238,0.35)',
                padding: '16px 28px',
                fontWeight: 400,
                borderBottom: `1px solid ${activeCategory === section.title ? '#C8A86B' : 'transparent'}`,
                marginBottom: -1,
                transition: 'all 0.3s ease'
              }}
            >
              {section.title}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {menuSections.find(s => s.title === activeCategory)?.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{
                  padding: '36px 40px',
                  border: '1px solid rgba(200,168,107,0.07)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(200,168,107,0.03) 0%, rgba(20,20,20,0.5) 100%)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(5px)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,168,107,0.1) 0%, rgba(20,20,20,0.8) 100%)';
                  e.currentTarget.style.borderColor = 'rgba(200,168,107,0.25)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(200,168,107,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,168,107,0.03) 0%, rgba(20,20,20,0.5) 100%)';
                  e.currentTarget.style.borderColor = 'rgba(200,168,107,0.07)';
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22, fontWeight: 600,
                    color: 'rgba(250,246,238,0.9)'
                  }}>{item.name}</h3>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18, color: '#C8A86B',
                    fontWeight: 600, flexShrink: 0, marginLeft: 16
                  }}>{item.price}</span>
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, color: 'rgba(250,246,238,0.35)',
                  lineHeight: 1.6, fontWeight: 300
                }}>{item.desc}</p>

                {/* Hover accent */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
                  background: 'linear-gradient(180deg, transparent, #C8A86B, transparent)',
                  opacity: 0, transition: 'opacity 0.3s ease'
                }} className="menu-accent-line" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chef note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-12 lg:mt-20 p-8 lg:p-12 border border-[#C8A86B]/10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
          style={{
            background: 'linear-gradient(135deg, rgba(26,22,20,0.6), rgba(15,12,10,0.8))'
          }}
        >
          <div style={{
            width: 60, height: 60, borderRadius: '50%', flexShrink: 0,
            border: '1px solid rgba(200,168,107,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ color: '#C8A86B', fontSize: 20 }}>✦</span>
          </div>
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18, fontStyle: 'italic',
              color: 'rgba(250,246,238,0.6)', lineHeight: 1.6, marginBottom: 12
            }}>
              All dishes are prepared with seasonal, locally sourced ingredients. Menu subject to change based on availability of finest produce.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#C8A86B'
            }}>Chef's Commitment</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
