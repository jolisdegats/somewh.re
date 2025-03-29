
'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { Menu } from 'lucide-react';

const Header = () => {
  const [{ y }] = useWindowScroll();
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out "
      style={{
        backgroundColor: y && y > 50 ? 'white' : 'transparent',
      }}
    >
      <div className="max-w-[1920px] mx-auto px-8 py-3">
        <nav className="flex items-center justify-between">
          <h1 className="font-display text-2xl">Somewhe.re</h1>
          <button className="p-2">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;