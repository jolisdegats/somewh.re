import { Location } from '@/app/types';
import Image from '@/app/_components/Library/Image';

const LocationGallery = ({
  gallery,
  locationName,
}: {
  gallery: Required<Location>['gallery'];
  locationName: string;
}) => {
  const getGridColumns = () => {
    // Base classes for small screens (1 column)
    let gridClasses = 'grid-cols-1';

    // Medium screen classes (2 columns for most cases)
    switch (gallery.length) {
      case 1:
        gridClasses += ' md:grid-cols-1';
        break;
      case 3:
      case 5:
      case 6:
        gridClasses += ' md:grid-cols-2';
        break;
      default:
        gridClasses += ' md:grid-cols-2';
    }

    // Large screen classes
    switch (gallery.length) {
      case 1:
        gridClasses += ' lg:grid-cols-1';
        break;
      case 2:
      case 4:
        gridClasses += ' lg:grid-cols-2';
        break;
      case 3:
      case 5:
      case 6:
        gridClasses += ' lg:grid-cols-3';
        break;
      default:
        gridClasses += ' lg:grid-cols-3';
    }

    return gridClasses;
  };

  return (
    <div className={`pt-24 grid gap-6 lg:gap-4 px-6 lg:px-4 overflow-hidden ${getGridColumns()}`}>
      {gallery.map(image => (
        <div key={image.url} className="col-span-1 relative h-70">
          <Image src={image.url} alt={`${locationName} ${image.credit.name}`} />
        </div>
      ))}
    </div>
  );
};

export default LocationGallery;
