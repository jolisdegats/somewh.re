'use client';

import { useState } from 'react';

const LocationKeyDates = ({
  keyDates,
}: {
  keyDates: { year: number; title: string; description?: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="col-span-1 lg:col-span-6 pb-12 lg:pb-0">
      <h2 className="font-display text-4xl font-black mb-8">Key dates</h2>

      <div className="relative overflow-hidden w-full h-[400px]">
        {keyDates.map((date, index, array) => {
          const isActive = index === activeIndex;
          const overlap = 40;
          const totalOverlap = array.length * overlap;
          const rightPosition =
            activeIndex > index
              ? `calc(100% - ${overlap * (index + 1)}px)`
              : `${(array.length - index - 1) * overlap}px`;
          const activeWidth = `calc(100% - ${totalOverlap - overlap}px${
            index !== 0 ? ` + ${overlap}px` : ''
          })`;
          const inactiveWidth = index === 0 ? `${overlap}px` : `${overlap * (index + 1)}px`;
          const width = activeIndex > index ? inactiveWidth : activeWidth;

          return (
            <div
              key={index}
              className={`absolute top-0 h-full rounded-3xl transition-all duration-200 ease-in-out cursor-pointer ${
                index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'
              }`}
              style={{
                right: rightPosition,
                top: '0',
                width,
                height: '400px',
                zIndex: 20 - index,
                opacity: 1,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="h-full flex flex-col">
                <div
                  className="flex items-baseline gap-4 mb-6 w-full align-text-top justify-end mt-[30px]"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  <span
                    className={`font-display text-4xl text-gray-400 dark:text-gray-500 
                     }
                    `}
                  >
                    {date.year}
                  </span>
                </div>
                <div
                  className={`${isActive ? 'p-8' : 'p-0'} ${index > 0 ? 'ml-[30px]' : 'ml-0'}
                      ${isActive ? 'opacity-100' : 'opacity-0'}
                    overflow-hidden transition-opacity duration-300`}
                  style={{ width: isActive ? '90%' : '0' }}
                >
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
  );
};

export default LocationKeyDates;
