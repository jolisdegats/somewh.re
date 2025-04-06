'use client';
import { useState } from 'react';
import Button from '@/app/_components/Library/Button';
const LocationKeyDates = ({
  keyDates,
}: {
  keyDates: { year: number; title: string; description?: string }[];
}) => {
  const [activeDate, setActiveDate] = useState(0);
  return (
    <div className="col-span-1 lg:col-span-8 lg:pl-18 lg:pr-36 pt-6 lg:pt-24 pb-12 lg:pb-0">
      <div className="space-y-8">
        <h2 className="font-display text-4xl font-black tracking-wider mb-6 mt-4">Key dates</h2>
        <div className="relative">
          <div className="grid grid-cols-6 gap-8 mb-2">
            {keyDates.map((date, index) => (
              <Button
                key={index}
                onClick={() => setActiveDate(index)}
                className={`relative py-2 ${
                  activeDate === index
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <span className="font-display text-2xl">{date.year}</span>
              </Button>
            ))}
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div className="font-medium text-xl mb-3">{keyDates[activeDate].title}</div>
            <p className="text-gray-600 dark:text-gray-300">{keyDates[activeDate].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationKeyDates;
