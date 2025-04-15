import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from '@/app/_components/Library/Image';

interface ImageModalProps {
  images: {
    url: string;
    imagePosition: string;
    credit: {
      name: string;
      url: string;
    };
  }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}) => {
  const [displayedIndex, setDisplayedIndex] = useState(currentIndex);
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center select-none">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
      >
        <X size={28} />
      </button>

      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors cursor-pointer focus:outline-none"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 transition-colors cursor-pointer focus:outline-none"
      >
        <ChevronRight size={28} />
      </button>

      <div className="w-full max-w-7xl mx-auto px-16">
        <div className="relative aspect-[16/9]">
          <div className="absolute inset-0">
            <Image
              src={images[displayedIndex].url}
              alt={`Gallery image ${displayedIndex + 1}`}
              className={`w-full h-full ${images[displayedIndex].imagePosition}`}
              priority
            />
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={images[currentIndex].url}
              alt={`Gallery image ${currentIndex + 1}`}
              className={`w-full h-full ${images[currentIndex].imagePosition}`}
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 text-white/80">
          <p className="text-sm flex items-center gap-2">
            {images[currentIndex].credit.name && (
              <>
                <a
                  href={images[currentIndex].credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Photo by {images[currentIndex].credit.name}
                </a>
                <span>-</span>
              </>
            )}
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
