'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          style={{ position: 'fixed', inset: 0, background: '#0A0A0A', zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
        >
          {/* Rotating ring */}
          <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 48 }}>
            <div className="rotate-slow" style={{
              position: 'absolute', inset: 0,
              border: '1px solid rgba(200,168,107,0.3)',
              borderTop: '1px solid #C8A86B',
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute', inset: 12,
              border: '1px solid rgba(200,168,107,0.15)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                color: '#C8A86B',
                letterSpacing: '0.1em'
              }}>A</span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 13,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(250,246,238,0.5)',
              marginBottom: 32
            }}
          >
            Afraa
          </motion.p>

          {/* Progress bar */}
          <div style={{ width: 200, height: 1, background: 'rgba(200,168,107,0.15)', position: 'relative' }}>
            <motion.div
              style={{
                position: 'absolute', left: 0, top: 0, height: '100%',
                background: 'linear-gradient(90deg, #9A7A4A, #C8A86B, #E8C98A)',
                width: `${Math.min(progress, 100)}%`,
                transition: 'width 0.1s ease'
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              letterSpacing: '0.3em',
              color: 'rgba(200,168,107,0.4)',
              marginTop: 16,
              fontWeight: 300
            }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
