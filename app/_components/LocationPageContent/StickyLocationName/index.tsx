'use client';

import Sticky from 'react-stickynode';

const StickyLocationName = ({ locationName }: { locationName: string }) => {
  return (
    <div className="h-full relative">
      <div id="top" className="top-0 left-0 h-0" />
      <div id="container" className="h-full relative">
        <div className="absolute top-0 left-32 w-[1px] bg-black dark:bg-gray-500 h-full" />
        <Sticky top="#header" bottomBoundary="#bottom">
          <div className="sticky translate-x-24">
            <div className="[writing-mode:sideways-lr] whitespace-nowrap pt-12">
              <h2 className="font-display text-black dark:text-gray-200 text-6xl font-bold px-6 bg-white dark:bg-gray-950">
                {locationName}
              </h2>
            </div>
          </div>
        </Sticky>
      </div>
      <div id="bottom" className="absolute bottom-12 left-0 h-0 w-full" />
    </div>
  );
};

export default StickyLocationName;
