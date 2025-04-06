'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { Menu, SunMoon } from 'lucide-react';
import Button from '@/app/_components/Library/Button';
import { useEffect } from 'react';

const Header = ({ children }: { children: React.ReactNode }) => {
  const [{ y }] = useWindowScroll();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };
  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out bg-white dark:bg-gray-950"
      style={{
        backgroundColor: y && y > 50 ? '' : 'transparent',
        boxShadow: y && y > 50 ? '0 0 10px 0 rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="max-w-[1920px] mx-auto px-8 py-3">
        <nav className="flex items-center justify-between">
          <h1 className="font-display text-2xl">Somewhe.re</h1>
          {children}
          <Button className="p-2" onClick={toggleTheme}>
            <SunMoon size={24} />
          </Button>
          <Button className="p-2">
            <Menu size={24} />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
