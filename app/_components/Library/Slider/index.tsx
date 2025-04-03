const Slider = ({
  value,
  onChange,
  min,
  max,
  step,
}: {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) => {
  // Calculate the percentage for the background fill
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full h-full y-2 group">
      <input
        type="range"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        style={{
          background: `linear-gradient(to right, black ${percentage}%, #636465 ${percentage}%)`,
        }}
        className="
          w-full
          h-1
          rounded-lg
          appearance-none
          cursor-pointer
          shadow-none
          
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-3
          [&::-webkit-slider-thumb]:h-3
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-black
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:scale-0
          [&::-webkit-slider-thumb]:origin-right
          group-hover:[&::-webkit-slider-thumb]:scale-100
          [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:duration-150

          [&::-moz-range-thumb]:w-3
          [&::-moz-range-thumb]:h-3
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-black
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:cursor-pointer
          [&::-moz-range-thumb]:scale-0
          [&::-moz-range-thumb]:origin-right
          group-hover:[&::-moz-range-thumb]:scale-100
          [&::-moz-range-thumb]:transition-transform
          [&::-moz-range-thumb]:duration-150

          [&::-moz-range-progress]:bg-black
          [&::-moz-range-progress]:rounded-l-lg
          [&::-moz-range-track]:bg-gray-800
          [&::-moz-range-track]:rounded-lg
        "
      />
    </div>
  );
};

export default Slider;
