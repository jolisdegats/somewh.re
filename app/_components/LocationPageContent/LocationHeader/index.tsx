'use client';
import { useRef, useState } from 'react';
import Button from '@/app/_components/Library/Button';
import { VolumeOff, Volume1, Volume2 } from 'lucide-react';
import { Location } from '@/app/types';
import Slider from '@/app/_components/Library/Slider';

const LocationHeader = ({ location }: { location: Location }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [volume, setVolume] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  const handleVolumeChange = (newVolume: number) => {
    if (audioRef.current) {
      setVolume(newVolume);
      audioRef.current.volume = newVolume / 100;

      if (newVolume === 0) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else if (!isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
          setVolume(0);
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleVolume = () => {
    if (audioRef.current) {
      if (volume === 0) {
        handleVolumeChange(50);
      } else {
        handleVolumeChange(0);
      }
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowVolume(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowVolume(false);
    }, 1000);
  };

  const VolumeIcon = volume === 0 ? VolumeOff : volume > 50 ? Volume2 : Volume1;

  return (
    <div className="h-full w-full flex items-center justify-end  mr-2">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <audio
          ref={audioRef}
          src={location.audio}
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <Button className="flex">
          <div
            className={`
              mr-2
              overflow-hidden
              transition-[width]
              duration-200
              ease-in-out
              ${showVolume ? 'w-[50px] lg:w-[80px]' : 'w-0'}
            `}
          >
            <Slider value={volume} onChange={handleVolumeChange} min={0} max={100} step={1} />
          </div>
          <div className="flex items-center justify-center">
            <VolumeIcon size={20} onClick={toggleVolume} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default LocationHeader;
