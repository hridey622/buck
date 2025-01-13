import React from 'react';
import { cn } from '../../lib/utils';
import './animated-button.css';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  const isOnlyText = typeof children === 'string';
  
  return (
    <button
      type="button"
      className={cn("Button", className)}
      {...props}
    >
      {isOnlyText ? (
        <span data-text={children}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
} 