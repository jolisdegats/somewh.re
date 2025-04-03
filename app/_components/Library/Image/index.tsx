'use client';
import NextImage from 'next/image';

const Image = ({
  priority,
  src,
  alt,
  className,
  disableSmoothLoading = false,
  fill = true,
  width,
  imagePosition = 'object-center',
  height,
  sizes,
  imageFill = 'object-cover',
}: {
  priority?: boolean;
  src: string;
  alt: string;
  className?: string;
  disableSmoothLoading?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  imagePosition?: string;
  imageFill?: string;
  sizes?: string;
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      draggable={false}
      className={`${
        !disableSmoothLoading && 'transition-opacity opacity-0 duration-[1s]'
      } ${imageFill} ${imagePosition} ${className}`}
      onLoad={e => {
        (e.target as HTMLElement).classList.remove('opacity-0');
      }}
    />
  );
};

export default Image;
