import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: string;
  color: string;
}

export default function SectorCard({ icon, title, description, stats, color }: SectorCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-border p-6 hover:shadow-hover transition-all cursor-pointer overflow-hidden">
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-bl-full transition-all group-hover:opacity-20`} />
      <div className={`${color} text-white p-3 rounded-xl mb-4 inline-block`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-4">{description}</p>
      <div className="text-sm font-medium text-primary">{stats}</div>
    </div>
  );
}