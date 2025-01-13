import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Logo({ className = '', ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-[spin_3s_linear_infinite]"
      />
      <path
        d="M12 7C12 7 14 9 14 12C14 15 12 17 12 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary"
      />
      <path
        d="M12 7C12 7 10 9 10 12C10 15 12 17 12 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        className="text-primary"
      />
    </svg>
  );
}