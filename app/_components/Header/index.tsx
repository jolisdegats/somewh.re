'use client'

import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
    <div className="max-w-[1920px] mx-auto px-8 py-6">
      <nav className="flex items-center justify-between">
        <h1 className="font-display text-2xl">Nomad&apos;s</h1>
        <button className="p-2">
          <Menu size={24} />
        </button>
      </nav>
    </div>
  </header>
  );
};

export default Header;