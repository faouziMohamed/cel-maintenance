'use client';
import { ReactNode } from 'react';
import cn from 'classnames';
import Link from 'next/link';

export function PrimaryButtonLink({
  children,
  className = '',
  href,
}: {
  children?: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'px-5 py-2 flex items-center justify-center bg-heading font-semibold text-sm sm:text-15px text-brand-light bg-blue-600 transition duration-100 hover:bg-opacity-90 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50 rounded-lg h-12 md:h-14',
        className,
      )}
    >
      {children}
    </Link>
  );
}
