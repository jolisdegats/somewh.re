'use client';

import { useEffect, useState } from 'react';

export default function LocationTemplate({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 500ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
}
