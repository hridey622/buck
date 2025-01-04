import React from 'react';
import IsometricCube from '../ui/IsometricCube';

interface SectorFeatureProps {
  title: string;
  description: string[];
  color: string;
}

export default function SectorFeatureCard({ title, description, color }: SectorFeatureProps) {
  return (
    <div className="bg-white rounded-2xl border border-border p-8 hover:shadow-hover transition-all">
      <div className="mb-6">
        <IsometricCube color={color} />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-text-secondary text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}