import { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border-l-4 border-blue-600 bg-neutral-50 dark:bg-neutral-900 p-4 shadow-sm transition-all ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-1 text-sm text-neutral-700 dark:text-neutral-300 leading-snug ${className}`}
      {...props}
    />
  );
}
