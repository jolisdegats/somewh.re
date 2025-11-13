'use client';

import { useRouter } from 'next/navigation';
import { BsGlobeAmericas } from 'react-icons/bs';
import { SAMPLE_LOCATIONS } from '@/app/data';
import useIsDarkMode from '@/app/_hooks/useIsDarkMode';
import { useState, useEffect } from 'react';

const RandomPlanetButton = () => {
  const router = useRouter();
  const isDarkMode = useIsDarkMode();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRandomLocation = () => {
    setIsAnimating(true);

    const uniqueLocations = SAMPLE_LOCATIONS.filter(
      (location, index, self) => index === self.findIndex(l => l.slug === location.slug)
    );

    const randomIndex = Math.floor(Math.random() * uniqueLocations.length);
    const randomLocation = uniqueLocations[randomIndex];

    // Reset animation after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    router.push(`/location/${randomLocation.slug}`);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleRandomLocation}
      className={`fixed bottom-0 right-3 z-40 p-4 rounded-tl-3xl rounded-tr-3xl hover:opacity-80 transition-opacity ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'
      }`}
      style={{
        boxShadow: isDarkMode
          ? '0 0 10px rgba(255, 255, 255, 0.05), 0 0 30px rgba(255, 255, 255, 0.05)'
          : '0 0 10px rgba(0, 0, 0, 0.05), 0 0 30px rgba(0, 0, 0, 0.05)',
      }}
      aria-label="Go to random location"
    >
      <BsGlobeAmericas
        size={20}
        className={`transition-transform duration-300 ${isAnimating ? 'rotate-[360deg]' : ''}`}
      />
    </button>
  );
};

export default RandomPlanetButton;
