import Image from '@/app/_components/Library/Image';

const LocationMain = ({
  name,
  country,
  region,
  continent,
  description,
  mainImageUrl,
  mainImagePosition,
  date,
}: {
  type: string[];
  name: string;
  country: string;
  region: string;
  continent: string;
  description: string;
  mainImageUrl: string;
  mainImagePosition?: string;
  date: Date;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[50vh] lg:min-h-screen">
      <div className="col-span-1 lg:col-span-6 p-4 md:p-8 lg:p-16 flex flex-col justify-end order-2 lg:order-1  lg:mt-0 mt-12">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="space-y-2 mb-4 mt-2">
            <h1 className="font-display text-6xl lg:text-8xl">{name}</h1>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mb-8 lg:mb-12 text-sm">
            <div>
              <small className="text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                Continent
              </small>
              <p className="font-medium text-gray-600 dark:text-gray-300">{continent}</p>
            </div>
            <div>
              <small className="text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                Country
              </small>
              <p className="font-medium text-gray-600 dark:text-gray-300">{country}</p>
            </div>
            <div>
              <small className="text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                Region
              </small>
              <p className="font-medium text-gray-600 dark:text-gray-300">{region}</p>
            </div>
          </div>

          <p className="text-md md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 lg:mb-12 text-balance">
            {description}
          </p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-6 relative h-[50vh] lg:h-auto order-1 lg:order-2">
        <Image
          priority
          src={mainImageUrl}
          alt={name}
          imagePosition={mainImagePosition}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default LocationMain;
