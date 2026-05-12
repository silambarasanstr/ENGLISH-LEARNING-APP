import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Card = ({ children, className, hover = true }) => {
  return (
    <div
      className={twMerge(
        'bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm',
        hover && 'hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => (
  <div className={twMerge('p-4 border-b border-slate-100', className)}>{children}</div>
);

export const CardBody = ({ children, className }) => (
  <div className={twMerge('p-4', className)}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
  <div className={twMerge('p-4 border-t border-slate-100', className)}>{children}</div>
);
