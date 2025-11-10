import { LuVolumeOff, LuVolume1, LuVolume2 } from 'react-icons/lu';

export const VolumeMute = ({ size, onClick }: { size: number; onClick: () => void }) => {
  return <LuVolumeOff size={size} onClick={onClick} />;
};

export const VolumeLow = ({ size, onClick }: { size: number; onClick: () => void }) => {
  return <LuVolume1 size={size} onClick={onClick} />;
};

export const VolumeHigh = ({ size, onClick }: { size: number; onClick: () => void }) => {
  return <LuVolume2 size={size} onClick={onClick} />;
};
