import NextImage from 'next/image';

const Image = ({
  src,
  alt,
  className,
  disableSmoothLoading = false,
}: {
  src: string;
  alt: string;
  className?: string;
  disableSmoothLoading?: boolean;
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className={`${!disableSmoothLoading && 'transition-opacity opacity-0 duration-[2s]'} ${className}`}
      onLoadingComplete={e => {
        if (!disableSmoothLoading) e.classList.remove('opacity-0');
      }}
    />
  );
};

export default Image;
