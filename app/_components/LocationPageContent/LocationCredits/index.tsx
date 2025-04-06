import { extractCredits } from '@/app/_utils/extractCredits';
import { Location } from '@/app/types';
import Link from 'next/link';
import React from 'react';

const LocationCredits = ({ location }: { location: Location }) => {
  const credits = extractCredits(location);

  return (
    <div className="text-center text-gray-500 dark:text-gray-400 py-20 px-12 lg:px-48 flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <small className=" uppercase tracking-wider mb-1">
          All musics have been made on{' '}
          <Link href="https://labs.google/fx/fr/tools/music-fx" className="underline">
            MusicFX.io
          </Link>
          <br />
          all images are under{' '}
          <Link
            href="https://creativecommons.org/share-your-work/cclicenses/"
            className="underline"
          >
            Creative Commons license
          </Link>
          .
        </small>
        <div className="flex flex-wrap justify-center">
          {credits.map((credit, index) => (
            <small key={credit.name + index}>
              <Link href={credit.url}>{credit.name}</Link>
              {index < credits.length - 1 && <span className="mx-1">·</span>}
            </small>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCredits;
