import React from 'react';

interface IsometricCubeProps {
  color: string;
  className?: string;
}

export default function IsometricCube({ color, className = '' }: IsometricCubeProps) {
  return (
    <div className={`relative w-16 h-16 ${className}`}>
      <div 
        className={`absolute w-12 h-12 transform rotate-45 ${color}`}
        style={{
          transformOrigin: 'center',
          transform: 'rotateX(60deg) rotateZ(45deg)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
}