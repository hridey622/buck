import React from 'react';
import { Startup } from '../../types/category';
import { TrendingUp, Users } from 'lucide-react';

interface StartupListProps {
  startups: Startup[];
}

export default function StartupList({ startups }: StartupListProps) {
  return (
    <div className="space-y-4">
      {startups.map((startup, index) => (
        <div 
          key={index}
          className="flex items-center p-4 bg-background-light rounded-xl hover:bg-background-accent transition-colors cursor-pointer group"
        >
          <img
            src={startup.image}
            alt={startup.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="ml-4 flex-1">
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {startup.name}
            </h3>
            <p className="text-sm text-text-secondary line-clamp-1">
              {startup.description}
            </p>
          </div>
          <div className="ml-4 text-right">
            <div className="flex items-center justify-end text-sm text-text-secondary mb-1">
              <Users className="h-4 w-4 mr-1" />
              {startup.investors}
            </div>
            <div className="flex items-center justify-end text-sm text-primary">
              <TrendingUp className="h-4 w-4 mr-1" />
              {startup.growth}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}