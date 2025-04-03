'use client';
import { useRef, useState } from 'react';
import Button from '@/app/_components/Library/Button';
import { VolumeOff, Volume1, Volume2 } from 'lucide-react';
import { Location } from '@/app/types';
import Slider from '@/app/_components/Library/Slider';

const LocationHeader = ({ location }: { location: Location }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(80);
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

  const VolumeIcon = volume === 0 ? VolumeOff : volume > 50 ? Volume2 : Volume1;

  return (
    <div className="w-full flex items-center justify-end">
      <div className="relative">
        <audio
          ref={audioRef}
          src={location.audio}
          loop
          autoPlay
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <Button
          className="flex p-2 relative"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <div
            className={`mr-2 w-[80px] transition-opacity duration-200 ease-in-out ${
              showVolume ? 'opacity-100' : 'opacity-0'
            } animate-fade-in`}
          >
            <Slider value={volume} onChange={handleVolumeChange} min={0} max={100} step={1} />
          </div>

          <VolumeIcon size={24} onClick={toggleVolume} />
        </Button>
      </div>
    </div>
  );
};

export default LocationHeader;
