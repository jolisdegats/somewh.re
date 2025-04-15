'use client';
const LocationKeyDates = ({
  keyDates,
}: {
  keyDates: { year: number; title: string; description?: string }[];
}) => {
  // const [activeDate, setActiveDate] = useState(0);
  return (
    <div className="col-span-1 lg:col-span-8 lg:pl-18 lg:pr-[160px] pt-6 pb-12 lg:pb-0">
      <div className="space-y-8">
        <h2 className="font-display text-4xl font-black tracking-wider mb-6 mt-4">Key dates</h2>
        {/* <div className="h-[300px] relative">
          <div className="absolute pointer-events-none z-10 w-full h-full bg-linear-to-r from-white/0 from-70% to-white"></div>
          <div className="absolute inset-0 flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
            {keyDates.map((date, index) => (
              <div
                key={index}
                onClick={() => setActiveDate(index)}
                className={`w-[280px] flex-shrink-0 p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeDate === index ? 'bg-black text-white' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="space-y-6">
                  <span className="font-display text-6xl block opacity-20">{date.year}</span>
                  <div>
                    <h3 className="font-medium text-lg mb-3">{date.title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        activeDate === index ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
                      {date.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="h-[300px] relative">
          <div className="absolute inset-0 flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
            <div className="flex gap-6">
              {keyDates.map((date, index) => (
                <div
                  key={index}
                  className="w-[250px] flex-shrink-0 p-6 rounded-xl bg-gray-50 group hover:bg-gray-50/80 transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-5xl text-gray-300 group-hover:text-gray-400 transition-colors">
                        {date.year}
                      </span>
                      <div className="w-12 h-[1px] bg-gray-200 group-hover:bg-gray-300 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-3">{date.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{date.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-26 flex-shrink-0" />
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-6 w-26 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />
        </div>
      </div>
    </div>
    // <div className="col-span-1 lg:col-span-8 lg:pl-18 lg:pr-36 pt-6 pb-12 lg:pb-0">
    //   <div className="space-y-8">
    //     <h2 className="font-display text-4xl font-black tracking-wider mb-6 mt-4">Key dates</h2>
    //     <div className="relative">
    //       <div className="grid grid-cols-6 gap-8 mb-2">
    //         {keyDates.map((date, index) => (
    //           <Button
    //             key={index}
    //             onClick={() => setActiveDate(index)}
    //             className={`relative py-2 ${
    //               activeDate === index
    //                 ? 'text-gray-900 dark:text-gray-100'
    //                 : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
    //             }`}
    //           >
    //             <span className="font-display text-2xl">{date.year}</span>
    //           </Button>
    //         ))}
    //       </div>
    //       <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
    //         <div className="font-medium text-xl mb-3">{keyDates[activeDate].title}</div>
    //         <p className="text-gray-600 dark:text-gray-300">{keyDates[activeDate].description}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LocationKeyDates;
