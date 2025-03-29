import Image from '@/app/_components/Library/Image';

const LocationMain = ({
  type,
  name,
  country,
  region,
  coordinates,
  description,
  mainImageUrl,
  mainImagePosition,
}: {
  type: string[];
  name: string;
  country: string;
  region: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  description: string;
  mainImageUrl: string;
  mainImagePosition?: string;
}) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-6 p-16 flex flex-col justify-end">
        <div className="max-w-2xl">
          <div className="space-y-2 mb-8">
            <div className="text-sm uppercase tracking-wider text-gray-500">{type.join(' • ')}</div>
            <h1 className="font-display text-8xl">{name}</h1>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12 text-sm">
            <div>
              <p className="text-gray-500 uppercase tracking-wider mb-1 font-semibold">Country</p>
              <p className="font-medium">{country}</p>
            </div>
            <div>
              <p className="text-gray-500 uppercase tracking-wider mb-1 font-semibold">Region</p>
              <p className="font-medium">{region}</p>
            </div>
            <div>
              <p className="text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                Coordinates
              </p>
              <p className="font-medium">
                {coordinates.latitude.toFixed(4)}°, {coordinates.longitude.toFixed(4)}°
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-gray-600 mb-12">{description}</p>
        </div>
      </div>
      <div className="col-span-6 relative">
        <Image
          src={mainImageUrl}
          alt={name}
          className={`w-full h-full object-cover ${mainImagePosition ?? 'object-center'}`}
        />
      </div>
    </div>
  );
};

export default LocationMain;
