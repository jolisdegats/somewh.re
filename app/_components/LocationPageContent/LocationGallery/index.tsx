import { Location } from '@/app/types';
import Image from '@/app/_components/Library/Image';

const LocationGallery = ({
  gallery,
  locationName,
}: {
  gallery: Required<Location>['gallery'];
  locationName: string;
}) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-16 h-130 ">
        {gallery.map(image => (
          <div key={image.url} className="col-span-4 relative">
            <Image src={image.url} alt={`${locationName} ${image.credit.name}`} />
          </div>
        ))}
      </div>

      <div className="pt-24 ">
        <div className="border-b border-gray-200" />
      </div>
    </>
  );
};

export default LocationGallery;
