import React from 'react';
import { ArrowRight } from 'lucide-react';
import StartupList from './StartupList';
import { Category } from '../../types/category';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden transition-all hover:shadow-hover">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
        <StartupList startups={category.startups} />
        <button className="w-full mt-6 bg-background-accent text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center">
          View All {category.name}
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}