const StickyLocationName = ({ locationName }: { locationName: string }) => {
  return (
    <div className="sticky top-0 left-0 h-screen flex flex-col translate-x-24">
      <div className="relative h-full">
        <div className="absolute left-0 top-0">
          <div className="[writing-mode:sideways-lr] whitespace-nowrap flex items-center h-full">
            <div className="w-[1px] h-full bg-black mt-6" />
            <div className="flex items-center">
              <h2 className="font-display text-black text-6xl font-bold">{locationName}</h2>
              <div className="w-[1px] h-[30px] bg-black mb-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyLocationName;
