'use client';

import { useState, useRef, useEffect } from 'react';

const KEY_DATES_HEIGHT = 300;
const KEY_DATES_WIDTH = 250;

const LocationKeyDates = ({
  keyDates,
}: {
  keyDates: { year: number; title: string; description?: string }[];
}) => {
  const [isHovered, setIsHovered] = useState(false);
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

  const onMouseLeave = () => {
    setActiveIndex(0);

    setIsHovered(false);
  };

  return (
    <div className="col-span-1 lg:col-span-6 pt-6 pb-12 lg:pb-0">
      <h2 className="font-display text-4xl font-black mb-8">Key dates</h2>

      <div
        className="relative h-[300px] w-[250px]"
        style={{
          height: KEY_DATES_HEIGHT,
          width: KEY_DATES_WIDTH,
        }}
      >
        {/* Hidden scroll control area */}
        <div
          ref={scrollControlRef}
          className="absolute inset-0 overflow-x-auto hide-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={onMouseLeave}
        >
          <div className="h-1" style={{ width: `${keyDates.length * 100}%` }} />
        </div>

        {/* Cards container */}
        <div className="absolute inset-0 pointer-events-none">
          {keyDates.map((date, index) => {
            return (
              <div
                key={index}
                className="absolute transition-all duration-200"
                style={{
                  width: KEY_DATES_WIDTH,
                  left: `0px`,
                  transform: `
                  translateY(${
                    !isHovered
                      ? '0px'
                      : index < activeIndex
                      ? '0px'
                      : `${(index - activeIndex) * 2}px`
                  })
                  translateX(${
                    !isHovered
                      ? '0px'
                      : index < activeIndex
                      ? '-20%'
                      : `${(index - activeIndex) * 10}px`
                  })
                `,
                  opacity: !isHovered ? 1 : index < activeIndex ? 0 : 1,
                  zIndex: keyDates.length - index,
                }}
              >
                <div
                  className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 ring-3 ring-gray-100 dark:ring-gray-800"
                  style={{
                    height: KEY_DATES_HEIGHT,
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-4xl text-gray-400 dark:text-gray-800 block mb-6">
                      {date.year}
                    </span>
                    <div className="w-12 h-[1px] bg-gray-200 group-hover:bg-gray-300 transition-colors" />
                  </div>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationKeyDates;
