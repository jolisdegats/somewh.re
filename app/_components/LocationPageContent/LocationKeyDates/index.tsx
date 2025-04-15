'use client';

import { useState, useRef, useEffect } from 'react';

const LocationKeyDates = ({
  keyDates,
}: {
  keyDates: { year: number; title: string; description?: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollControl = scrollControlRef.current;
    if (!scrollControl) return;

    const handleScroll = () => {
      const scrollProgress =
        scrollControl.scrollLeft / (scrollControl.scrollWidth - scrollControl.clientWidth);
      const newIndex = Math.floor(scrollProgress * keyDates.length);
      if (newIndex >= 0 && newIndex < keyDates.length) {
        setActiveIndex(newIndex);
      }
    };

    scrollControl.addEventListener('scroll', handleScroll);
    return () => scrollControl.removeEventListener('scroll', handleScroll);
  }, [keyDates.length]);

  return (
    <div className="col-span-1 lg:col-span-6 pt-6 pb-12 lg:pb-0">
      <h2 className="font-display text-4xl font-black mb-8">Key dates</h2>

      <div className="relative h-[400px]">
        {/* Hidden scroll control area */}
        <div ref={scrollControlRef} className="absolute inset-0 overflow-x-auto hide-scrollbar">
          {/* This div determines the scrollable width */}
          <div className="h-1" style={{ width: `${keyDates.length * 100}%` }} />
        </div>

        {/* Cards container */}
        <div className="absolute inset-0 pointer-events-none">
          {keyDates.map((date, index) => (
            <div
              key={index}
              className="absolute w-[350px] transition-all duration-500"
              style={{
                left: `${index * 14}px`,
                transform: `
                  translateX(${index < activeIndex ? '-100%' : `0px`})
                `,
                opacity: index < activeIndex ? 0 : 1,
                zIndex: keyDates.length - index,
              }}
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 h-[350px]">
                <span className="font-display text-6xl text-gray-100 dark:text-gray-800 block mb-6">
                  {date.year}
                </span>
                <div>
                  <h3 className="text-xl font-medium mb-3">{date.title}</h3>
                  {date.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {date.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationKeyDates;
