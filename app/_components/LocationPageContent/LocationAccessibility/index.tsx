const LocationAccessibility = ({
  currency,
  languages,
  religions,
  averageTemp,
}: {
  currency: string;
  languages: string[];
  religions: string[];
  averageTemp: string;
}) => {
  return (
    <div className="pt-24 text-center">
      <div className="text-balance grid grid-cols-4 gap-12 border-y border-gray-200 dark:border-gray-700 py-8 px-14">
        <div className="col-span-4 lg:col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6">Languages</h2>
          <p className="text-gray-600 dark:text-gray-300 uppercase">{languages.join(', ')}</p>
        </div>
        <div className="col-span-4 lg:col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6 ">Religions</h2>
          <p className="text-gray-600 dark:text-gray-300 uppercase">{religions.join(', ')}</p>
        </div>
        <div className="col-span-4 lg:col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6">Currency</h2>
          <p className="text-gray-600 dark:text-gray-300 uppercase">{currency}</p>
        </div>
        <div className="col-span-4 lg:col-span-1 relative">
          <h2 className="font-display text-2xl font-black tracking-wider mb-6">Climate</h2>
          <p className="text-gray-600 dark:text-gray-300 uppercase">{averageTemp}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationAccessibility;
