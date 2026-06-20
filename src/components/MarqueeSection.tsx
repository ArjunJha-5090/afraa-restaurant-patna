'use client';

const items = [
  'Craft Cocktails',
  '·',
  'Elevated Dining',
  '·',
  'Premium Spirits',
  '·',
  'Seasonal Menus',
  '·',
  'Live Events',
  '·',
  'Private Dining',
  '·',
  'Curated Wines',
  '·',
  'Artisan Cuisine',
  '·',
];

export default function MarqueeSection() {
  return (
    <div style={{
      borderTop: '1px solid rgba(200,168,107,0.1)',
      borderBottom: '1px solid rgba(200,168,107,0.1)',
      padding: '24px 0',
      overflow: 'hidden',
      background: 'rgba(26,22,20,0.5)'
    }}>
      <div className="marquee-track" style={{ display: 'flex' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontFamily: item === '·' ? "'Inter', sans-serif" : "'Cormorant Garamond', serif",
            fontSize: item === '·' ? 20 : 18,
            color: item === '·' ? 'rgba(200,168,107,0.4)' : 'rgba(250,246,238,0.5)',
            letterSpacing: item === '·' ? '0.1em' : '0.15em',
            textTransform: 'uppercase',
            padding: '0 32px',
            fontWeight: 400,
            fontStyle: item === '·' ? 'normal' : 'italic',
            flexShrink: 0,
            whiteSpace: 'nowrap'
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
