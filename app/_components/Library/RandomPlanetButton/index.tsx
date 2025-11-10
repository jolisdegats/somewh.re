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

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRandomLocation = () => {
    const uniqueLocations = SAMPLE_LOCATIONS.filter(
      (location, index, self) => index === self.findIndex(l => l.slug === location.slug)
    );

    const randomIndex = Math.floor(Math.random() * uniqueLocations.length);
    const randomLocation = uniqueLocations[randomIndex];

    router.push(`/location/${randomLocation.slug}`);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleRandomLocation}
      className={`fixed bottom-0 right-0 z-50 p-4 rounded-tl-3xl rounded-tr-3xl hover:opacity-80 transition-opacity shadow-lg ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      aria-label="Go to random location"
    >
      <BsGlobeAmericas size={20} />
    </button>
  );
};

export default RandomPlanetButton;
