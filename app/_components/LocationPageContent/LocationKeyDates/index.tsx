'use client';

import { useState } from 'react';

const LocationKeyDates = ({
  keyDates,
}: {
  keyDates: { year: number; title: string; description?: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="col-span-1 lg:col-span-6 pt-6 pb-12 lg:pb-0">
      <h2 className="font-display text-4xl font-black mb-8">Key dates</h2>

      <div className="relative overflow-hidden" style={{ width: '500px', height: '400px' }}>
        {keyDates.map((date, index) => {
          const isActive = index === activeIndex;

          const containerWidth = 500;
          const activeWidth = 330;
          const totalInactiveCards = keyDates.length - 1;
          const remainingSpace = containerWidth - activeWidth;

          let inactiveWidth = 0;
          let overlap = 0;

          if (totalInactiveCards > 0) {
            inactiveWidth = Math.max(70, Math.min(100, remainingSpace / totalInactiveCards));
            overlap = Math.max(30, inactiveWidth * 0.5);
          }

          let leftPosition = 0;

          if (index === 0) {
            leftPosition = 0;
          } else {
            let cumulativeWidth = 0;
            for (let i = 0; i < index; i++) {
              if (i === activeIndex) {
                cumulativeWidth += activeWidth;
              } else {
                cumulativeWidth += inactiveWidth;
              }
              cumulativeWidth -= overlap;
            }
            leftPosition = cumulativeWidth;

            if (isActive) {
              let inactivePosition = 0;
              for (let i = 0; i < index; i++) {
                inactivePosition += inactiveWidth;
                inactivePosition -= overlap;
              }
              leftPosition = inactivePosition;
            }
          }

          const zIndex = keyDates.length - index;

          const width = isActive ? activeWidth : inactiveWidth;

          return (
            <div
              key={index}
              className={`absolute top-0 h-full rounded-3xl transition-all duration-300 ease-in-out cursor-pointer ${
                index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-gray-100 dark:bg-gray-800'
              }`}
              style={{
                left: `${leftPosition}px`,
                top: '0',
                width: `${width}px`,
                height: '400px',
                zIndex,
                opacity: 1, // All cards are visible
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-baseline gap-4 mb-6 w-full align-text-top justify-end">
                  <span className="font-display text-4xl text-white rotate-90 mt-[30px]">
                    {date.year}
                  </span>
                  {/* {isActive && <div className="w-12 h-[1px] bg-gray-200 dark:bg-gray-700" />} */}
                </div>
                {/* {isActive && ( */}
                <div
                  className={`p-8 ${index > 0 ? 'ml-[30px]' : 'ml-0'}
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                   overflow-hidden transition-opacity duration-300`}
                >
                  <h3 className="text-xl font-medium mb-3">{date.title}</h3>
                  {date.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {date.description}
                    </p>
                  )}
                </div>
                {/* )} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationKeyDates;
