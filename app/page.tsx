'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {  SAMPLE_LOCATIONS } from '@/app/types';
import { LocationPage } from '@/app/_components/LocationPage';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = SAMPLE_LOCATIONS[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_LOCATIONS.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? SAMPLE_LOCATIONS.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
        <LocationPage location={location} />
        <div className="fixed bottom-8 right-8 flex items-center gap-4">
          <button 
            onClick={goToPrev}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="font-medium">
            {currentIndex + 1} / {SAMPLE_LOCATIONS.length}
          </div>
          <button 
            onClick={goToNext}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
    </div>
  );
}

export default App;