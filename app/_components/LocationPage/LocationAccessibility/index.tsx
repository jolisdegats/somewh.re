const LocationAccessibility = ({
  bestTimeToVisit,
  averageTemp,
  languages,
  religions,
}: {
  bestTimeToVisit: string[];
  averageTemp: string;
  languages: string[];
  religions: string[];
}) => {
  return (
    <div className="pt-24 pb-24 gap-16 text-center">
      <div className="grid grid-cols-4 gap-16 border-y border-gray-200 py-8">
        <div className="col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">
            Best time to visit
          </h2>
          <p className="text-gray-600 uppercase">{bestTimeToVisit.join(', ')}</p>
        </div>
        <div className="col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">
            Average weather
          </h2>
          <p className="text-gray-600 uppercase">{averageTemp}</p>
        </div>
        <div className="col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">Languages</h2>
          <p className="text-gray-600 uppercase">{languages.join(', ')}</p>
        </div>
        <div className="col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">Religions</h2>
          <p className="text-gray-600 uppercase">{religions.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationAccessibility;
