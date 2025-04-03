'use client';
import { SAMPLE_LOCATIONS } from '@/app/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
const LocationPagination = ({ id }: { id: string }) => {
  //TODO
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const elementIndex = SAMPLE_LOCATIONS.findIndex(location => location.id === id);
  const newerElementIndex = elementIndex + 1;
  const newerElementId = SAMPLE_LOCATIONS[newerElementIndex]?.id;
  const olderElementIndex = elementIndex - 1;
  const olderElementId = SAMPLE_LOCATIONS[olderElementIndex]?.id;

  {
    /* // <div className="fixed bottom-8 right-8 flex items-center gap-4 z-10">
    //   {olderElementId && (
    //     <Link href={`/location/${olderElementId}`}>
    //       <div className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
    //         <ChevronLeft size={24} />
    //       </div>
    //     </Link>
    //   )}
    //   <div className="font-medium">
    //     {elementNumber} / {SAMPLE_LOCATIONS.length}
    //   </div>
    //   {newerElementId && (
    //     <Link href={`/location/${newerElementId}`}>
    //       <div className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
    //         <ChevronRight size={24} />
    //       </div>
    //     </Link>
    //   )}
    // </div> */
  }

  const parameters: { id: string; direction: 'left' | 'right' }[] = [];
  if (olderElementId && olderElementIndex >= 0) {
    parameters.push({
      id: olderElementId,
      direction: 'left',
    });
  }
  if (newerElementId && newerElementIndex <= SAMPLE_LOCATIONS.length - 1) {
    parameters.push({
      id: newerElementId,
      direction: 'right',
    });
  }

  return (
    // <div className="relative h-full w-full">
    parameters.map(parameter => (
      <div
        key={parameter.id}
        className={`absolute top-0 w-20 h-screen ${
          parameter.direction === 'left' ? 'left-0' : 'right-0'
        }`}
      >
        {/* <div
            className={`absolute top-0 left-0 w-full h-full ${
              isHovering === parameter.id ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={() => setIsHovering(parameter.id)}
          /> */}

        <Link
          onMouseEnter={() => setIsHovering(parameter.id)}
          onMouseLeave={() => setIsHovering(null)}
          className={`flex items-center justify-center w-20 h-full 
                transition-all duration-200 ${
                  isHovering === parameter.id
                    ? 'from-[#3f404666] to-transparent'
                    : 'from-transparent to-transparent'
                }
                ${parameter.direction === 'left' ? 'bg-linear-to-r' : 'bg-linear-to-l'}`}
          href={`/location/${parameter.id}`}
        >
          {isHovering === parameter.id && parameter.direction === 'left' && (
            <ChevronLeft size={24} />
          )}
          {isHovering === parameter.id && parameter.direction === 'right' && (
            <ChevronRight size={24} />
          )}
        </Link>
      </div>
    ))
    // </div>
  );
};

export default LocationPagination;
