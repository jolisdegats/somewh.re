const Footer = () => {
  return (
    <footer className="px-24  w-full bg-white dark:bg-gray-950">
      <div className="px-12 py-5 flex justify-between items-center border-t border-gray-200 dark:border-gray-800">
        <div></div>
        {/* <div className="absolute w-full h-full bg-red"> */}
        {/* <div className="w-1/2 leading-5">
          <small>
            Discover a breathtaking, off-the-beaten-path destination every day with Somewh.re.
            <br />
            From natural wonders to hidden gems, explore the most extraordinary places on Earth—one
            day at a time.
            <br />
            Inspired by the legendary smwh.re.
          </small>
        </div> */}
        <div className="flex items-center gap-4 text-gray-400">
          <small>
            Made with ❤︎ by{' '}
            <a href="https://github.com/jolisdegats" className="underline">
              jolisdegats
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
