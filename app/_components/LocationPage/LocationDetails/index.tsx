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
    <div key={detail.category} className="col-span-10 grid grid-cols-12 gap-16 m-x-16 space-y-16">
      <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} col-span-6 relative`}>
        <div className="grid grid-cols-1 gap-4 relative">
          {detail.image && (
            <div className="h-[250px] w-full overflow-hidden">
              <Image
                src={detail.image}
                alt={`${locationName} ${detail.category} 1`}
                layout="fill"
                objectFit="cover"
                className={`w-full h-full ${detail.imagePosition ?? 'object-center'}`}
              />
            </div>
          )}
        </div>
      </div>
      <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} col-span-6 relative`}>
        <h2 className="font-display text-4xl font-black tracking-wider mb-6 mt-4">
          {detail.category}
        </h2>
        <p className="text-gray-600">{detail.description}</p>
      </div>
    </div>
  ));
};

export default LocationDetails;
