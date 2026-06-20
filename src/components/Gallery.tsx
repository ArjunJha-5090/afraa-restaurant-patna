'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  { id: 1, category: 'Interior', size: 'large', accent: '#C8A86B', label: 'Afraa Lounge', imgUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200&q=80' },
  { id: 2, category: 'Beverages', size: 'small', accent: '#E8C98A', label: 'Blue Lagoon Mocktail', imgUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80' },
  { id: 3, category: 'Food', size: 'small', accent: '#B87333', label: 'Sizzling Brownie', imgUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80' },
  { id: 4, category: 'Interior', size: 'medium', accent: '#9B7DB8', label: 'Private Dining', imgUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80' },
  { id: 5, category: 'Events', size: 'small', accent: '#C8A86B', label: 'Live Music Nights', imgUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80' },
  { id: 6, category: 'Beverages', size: 'large', accent: '#6B9B8A', label: 'Virgin Mojito', imgUrl: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=900&q=80' },
  { id: 7, category: 'Food', size: 'medium', accent: '#D4A0B0', label: 'Chicken Kadhai & Naan', imgUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b6ae398?w=800&q=80' },
  { id: 8, category: 'Interior', size: 'small', accent: '#C8A86B', label: 'The Cellar', imgUrl: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80' },
  { id: 9, category: 'Events', size: 'small', accent: '#E8C98A', label: 'Weekend Vibe', imgUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&q=80' },
  { id: 10, category: 'Food', size: 'large', accent: '#9B7DB8', label: 'Mutton Kosha', imgUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80' },
  { id: 11, category: 'Food', size: 'small', accent: '#B87333', label: 'Tibetan Momos', imgUrl: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&q=80' },
];

const filters = ['All', 'Interior', 'Beverages', 'Food', 'Events'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-40 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A, #0D0B09 50%, #0A0A0A 100%)' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(200,168,107,0.04) 0%, transparent 60%)'
      }} />

      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 24 }}
          >
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(200,168,107,0.6))' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C8A86B' }}>Gallery</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, rgba(200,168,107,0.6), transparent)' }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
            transition={{ delay: 0.15, duration: 1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 700, color: 'rgba(250,246,238,0.95)',
              marginBottom: 16, lineHeight: 1.1
            }}
          >
            A Visual <em style={{ fontStyle: 'italic', color: '#C8A86B' }}>Narrative</em>
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-10 lg:mb-[60px]"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                background: activeFilter === f ? 'rgba(200,168,107,0.1)' : 'transparent',
                border: `1px solid ${activeFilter === f ? '#C8A86B' : 'rgba(200,168,107,0.2)'}`,
                color: activeFilter === f ? '#C8A86B' : 'rgba(250,246,238,0.4)',
                padding: '10px 24px',
                fontFamily: "'Inter', sans-serif",
                fontSize: 11, letterSpacing: '0.2em',
                textTransform: 'uppercase', cursor: 'pointer',
                fontWeight: 400, transition: 'all 0.3s ease'
              }}
            >{f}</button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                onClick={() => setLightboxItem(item)}
                className={`relative overflow-hidden cursor-pointer border border-[#C8A86B]/5 bg-[#0A0A0A] ${item.size === 'large' ? 'md:col-span-2 row-span-2' : item.size === 'medium' ? 'col-span-1 row-span-2' : 'col-span-1 row-span-1'}`}
                style={{}}
                whileHover={{ scale: 1.01 }}
              >
                {/* Photo */}
                <Image
                  src={item.imgUrl}
                  alt={item.label}
                  fill
                  sizes={item.size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
                  style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
                />

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(10,10,10,0.7)',
                    display: 'flex', alignItems: 'flex-end',
                    padding: 24
                  }}
                >
                  <div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10, letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: item.accent, marginBottom: 6
                    }}>{item.category}</p>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: item.size === 'large' ? 22 : 16,
                      color: 'rgba(250,246,238,0.9)',
                      fontWeight: 600
                    }}>{item.label}</p>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  width: 20, height: 20,
                  borderTop: `1px solid ${item.accent}50`,
                  borderRight: `1px solid ${item.accent}50`
                }} />
                <div style={{
                  position: 'absolute', bottom: 12, left: 12,
                  width: 20, height: 20,
                  borderBottom: `1px solid ${item.accent}50`,
                  borderLeft: `1px solid ${item.accent}50`
                }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              style={{
                width: '90vw', height: '70vh', maxWidth: 1000,
                border: `1px solid ${lightboxItem.accent}30`,
                position: 'relative',
                overflow: 'hidden',
                background: '#0A0A0A',
              }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={lightboxItem.imgUrl}
                alt={lightboxItem.label}
                fill
                sizes="70vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)',
              }} />
              <div style={{ position: 'absolute', bottom: 40, left: 40 }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, letterSpacing: '0.3em',
                  textTransform: 'uppercase', color: lightboxItem.accent, marginBottom: 12
                }}>{lightboxItem.category}</p>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32, color: 'rgba(250,246,238,0.95)', fontWeight: 700
                }}>{lightboxItem.label}</p>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(200,168,107,0.3)',
                  color: '#C8A86B', width: 40, height: 40,
                  cursor: 'pointer', fontSize: 16
                }}
              >×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
