'use client';
// import { useState } from 'react';
// import Button from '@/app/_components/Library/Button';
import { Calendar } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Compass } from 'lucide-react';

const LocationKeyDates = () => {
  //   const [showAllDates, setShowAllDates] = useState(false);
  return (
    <div className="flex items-center gap-8 text-sm">
      <div className="flex items-center gap-2">
        <Calendar size={18} className="text-gray-400" />
        <span>XXX</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin size={18} className="text-gray-400" />
        <span>XXX</span>
      </div>
      <div className="flex items-center gap-2">
        <Compass size={18} className="text-gray-400" />
        <span className="capitalize">XXX</span>
      </div>
    </div>
  );
  //   return (
  //     <div id="key-dates" className="px-20 pt-2">
  //       <h2 className="font-display text-4xl font-black tracking-wider mb-6 mt-4">Key dates</h2>
  //       <div className={`${showAllDates ? 'h-auto' : 'h-[300px]'} overflow-hidden`}>
  //         <div className="ml-2 transition-all duration-300 text-gray-600 text-balance border-l-2 border-gray-400 pl-4">
  //           {keyDates.map(date => (
  //             <div key={date.year} className="mb-4 last:mb-0">
  //               <div className="flex flex-col gap-2">
  //                 <div className="flex items-center gap-2 -ml-[23px]">
  //                   <div className="w-3 h-3 bg-gray-600 rounded-full flex-shrink-0 items-center justify-center flex-grow-0" />
  //                   <div className="flex items-center gap-2">
  //                     <span className="font-display text-lg font-bold">{date.year}</span>|
  //                     <h3 className="font-display text-lg font-bold">{date.title}</h3>
  //                   </div>
  //                 </div>
  //                 {date.description && <p className="text-sm">{date.description}</p>}
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //       <Button
  //         onClick={() => {
  //           setShowAllDates(!showAllDates);
  //           const keyDatesElement = document.getElementById('key-dates');
  //           if (keyDatesElement) {
  //             const keyDatesElementPosition =
  //               keyDatesElement.getBoundingClientRect().top + window.scrollY;
  //             const offsetPosition = keyDatesElementPosition - 100;
  //             window.scrollTo({
  //               top: offsetPosition,
  //               behavior: 'smooth',
  //             });
  //           }
  //         }}
  //         className="text-gray-500 text-2xl ml-[2px] flex-shrink-0 flex-grow-0"
  //       >
  //         {showAllDates ? '-' : '+'}
  //       </Button>
  //     </div>
  //   );
};

export default LocationKeyDates;
