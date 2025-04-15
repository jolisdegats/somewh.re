const KeyDateCard = ({
  date,
  index,
  isHovered,
  activeIndex,
  length,
}: {
  date: { year: number; title: string; description?: string };
  index: number;
  isHovered: boolean;
  activeIndex: number;
  length: number;
}) => {
  const isStacked = isHovered;
  const isHidden = isStacked && index < activeIndex;
  const offsetY = isStacked && !isHidden ? (index - activeIndex) * 2 : 0;
  const offsetX = isStacked && !isHidden ? (index - activeIndex) * 10 : 0;
  const opacity = isHidden ? 0 : 1;
  const zIndex = length - index;

  return (
    <div
      key={index}
      className="absolute w-[300px] transition-all duration-200"
      style={{
        left: `0px`,
        transform: `translateY(${offsetY}px) translateX(${isHidden ? '-20%' : offsetX + 'px'})`,
        opacity,
        zIndex,
      }}
    >
      <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 h-[300px] ring-3 ring-gray-100/50 dark:ring-gray-800">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-4xl text-gray-400 dark:text-gray-800 block mb-6">
            {date.year}
          </span>
          <div className="w-12 h-[1px] bg-gray-200 group-hover:bg-gray-300 transition-colors" />
        </div>
        <div>
          <h3 className="text-xl font-medium mb-3">{date.title}</h3>
          {date.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {date.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeyDateCard;
