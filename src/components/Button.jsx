import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all',
    secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md hover:shadow-lg transition-all',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all',
    ghost: 'text-indigo-600 hover:bg-indigo-50 transition-all',
    danger: 'bg-red-500 text-white hover:bg-red-600 transition-all',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-base font-semibold',
  };

  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
