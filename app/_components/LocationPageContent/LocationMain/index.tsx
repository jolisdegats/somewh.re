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
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-6 p-16 flex flex-col justify-end">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-wider text-gray-500">
            {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            <br />
          </div>
          <div className="space-y-2 mb-4 mt-2">
            <h1 className="font-display text-8xl">{name}</h1>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-12 text-sm">
            <div>
              <small className="text-gray-500 uppercase tracking-wider mb-1">Continent</small>
              <p className="font-medium text-gray-600">{continent}</p>
            </div>
            <div>
              <small className="text-gray-500 uppercase tracking-wider mb-1">Country</small>
              <p className="font-medium text-gray-600">{country}</p>
            </div>
            <div>
              <small className="text-gray-500 uppercase tracking-wider mb-1">Region</small>
              <p className="font-medium text-gray-600">{region}</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-gray-600 mb-12 text-balance">{description}</p>
        </div>
      </div>
      <div className="col-span-6 relative">
        <Image
          priority
          src={mainImageUrl}
          alt={name}
          imagePosition={mainImagePosition}
          sizes="50vw"
        />
      </div>
    </div>
  );
};

export default LocationMain;
