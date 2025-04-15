'use client';

import { Location } from '@/app/types';
import Image from '@/app/_components/Library/Image';
import { ImageModal } from './Modal';
import { useCallback, useEffect, useState } from 'react';

const LocationGallery = ({
  gallery,
  locationName,
}: {
  gallery: Required<Location>['gallery'];
  locationName: string;
}) => {
  // const getGridColumns = () => {
  //   // Base classes for small screens (1 column)
  //   let gridClasses = 'grid-cols-1';

  //   // Medium screen classes (2 columns for most cases)
  //   switch (gallery.length) {
  //     case 1:
  //       gridClasses += ' md:grid-cols-1';
  //       break;
  //     case 3:
  //     case 5:
  //     case 6:
  //       gridClasses += ' md:grid-cols-2';
  //       break;
  //     default:
  //       gridClasses += ' md:grid-cols-2';
  //   }

  //   // Large screen classes
  //   switch (gallery.length) {
  //     case 1:
  //       gridClasses += ' lg:grid-cols-1';
  //       break;
  //     case 2:
  //     case 4:
  //       gridClasses += ' lg:grid-cols-2';
  //       break;
  //     case 3:
  //     case 5:
  //     case 6:
  //       gridClasses += ' lg:grid-cols-3';
  //       break;
  //     default:
  //       gridClasses += ' lg:grid-cols-3';
  //   }

  //   return gridClasses;
  // };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedIndex, setDisplayedIndex] = useState(currentIndex);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentIndex !== displayedIndex) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayedIndex(currentIndex);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayedIndex]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % gallery.length);
  }, [gallery]);

  const previousImage = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') previousImage();
    };
    if (!isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [nextImage, previousImage, isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <ImageModal
          images={gallery}
          currentIndex={currentIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
      <div className="space-y-4 w-full hidden lg:block mt-24">
        <div
          className="relative w-[60vw] h-[40vw] mx-auto overflow-hidden cursor-pointer"
          onClick={() => openModal(currentIndex)}
        >
          <div className="absolute inset-0">
            <Image
              src={gallery[displayedIndex].url}
              alt={locationName}
              priority
              className={`w-full h-full ${gallery[displayedIndex].imagePosition}`}
            />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={gallery[currentIndex].url}
              alt={`Gallery image ${currentIndex + 1}`}
              className={`w-full h-full ${gallery[currentIndex].imagePosition}`}
              priority
            />
          </div>
        </div>
        <div
          onKeyDown={e => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className="w-[60vw] mx-auto flex gap-4 overflow-x-auto hide-scrollbar pb-4 scroll-smooth"
        >
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-[150px] aspect-[3/2] group overflow-hidden cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                fill
                src={image.url}
                alt={`${locationName} gallery ${index + 1}`}
                className={`w-full h-full ${image.imagePosition}`}
              />
              <div
                className={`absolute w-full h-full bg-black/20 ${
                  currentIndex === index ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // return (
  //   <div className={`pt-24 grid gap-6 lg:gap-4 px-6 lg:px-4 overflow-hidden ${getGridColumns()}`}>
  //     {gallery.map(image => (
  //       <div key={image.url} className="col-span-1 relative h-70">
  //         <Image src={image.url} alt={`${locationName} ${image.credit.name}`} />
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default LocationGallery;
