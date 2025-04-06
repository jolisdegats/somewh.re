import { Location } from '@/app/types';
import Image from '@/app/_components/Library/Image';

const LocationDetails = ({
  locationDetails,
  locationName,
}: {
  locationDetails: Location['details'];
  locationName: string;
}) => {
  return locationDetails?.map((detail, index) => (
    <div key={detail.category} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
      <div
        className={`${
          index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
        } col-span-1 lg:col-span-6 relative`}
      >
        <div className="grid grid-cols-1 gap-4 relative">
          {detail.image && (
            <div className="h-[200px] md:h-[250px] w-full overflow-hidden relative">
              <Image
                src={detail.image.url}
                alt={`${locationName} ${detail.category} 1`}
                imagePosition={detail.image.imagePosition}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={`${
          index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
        } col-span-1 lg:col-span-6 relative`}
      >
        <h2 className="font-display text-3xl md:text-4xl font-black tracking-wider mb-4 md:mb-6 mt-4">
          {detail.category}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-balance">{detail.description}</p>
      </div>
    </div>
  ));
};

export default LocationDetails;
