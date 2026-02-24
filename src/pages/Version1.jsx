import React, { useState, useEffect } from 'react';
import Slide01 from '../slides/Slide01';
import Slide02 from '../slides/Slide02';
import Slide03 from '../slides/Slide03';
import Slide04 from '../slides/Slide04';
import Slide05 from '../slides/Slide05';
import Slide06 from '../slides/Slide06';
import Slide07 from '../slides/Slide07';
import Slide08 from '../slides/Slide08';

const slides = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
];

// Auto-scaling logic wrapper
export default function Version1() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / 1920;
      const scaleY = window.innerHeight / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <div 
        className="relative bg-canvas flex-shrink-0 shadow-2xl overflow-hidden"
        style={{
          width: '1920px',
          height: '1080px',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      >
        <AppInner currentSlide={0} />
      </div>
    </div>
  );
}

// Inner Component to handle state cleanly
function AppInner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const SlideComponent = slides[currentSlide];

  return (
    <>
      <SlideComponent />
      <div className="absolute bottom-6 right-8 text-secondary/40 text-lg font-medium tracking-widest z-50">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </>
  );
}
