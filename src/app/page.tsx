'use client';
import { useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MarqueeSection from '@/components/MarqueeSection';
import About from '@/components/About';
import Beverages from '@/components/Beverages';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      try {
        const LenisModule = await import('@studio-freight/lenis');
        const Lenis = LenisModule.default;
        const lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
      } catch {
        // Lenis not available, use native scroll
      }
    };

    const cleanup = initLenis();
    return () => { cleanup.then(fn => fn && fn()); };
  }, []);

  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <LoadingScreen />
      <Navigation />
      <Hero />
      <MarqueeSection />
      <About />
      <Beverages />
      <Menu />
      <Gallery />
      <Events />
      <Reservation />
      <Footer />
    </main>
  );
}
