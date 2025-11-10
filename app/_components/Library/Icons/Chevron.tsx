import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const ChevronLeft = ({ size }: { size: number }) => {
  return <LuChevronLeft size={size} />;
};

export const ChevronRight = ({ size }: { size: number }) => {
  return <LuChevronRight size={size} />;
};
