import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/category/CategoryCard';
import { ArrowRight } from 'lucide-react';

export default function Categories() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-background-dark text-white py-24 -mt-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Discover High-Impact
              <br />
              Investment Opportunities
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We've curated the most promising startups across different sectors.
              Min investment. Max potential. Full transparency.
            </p>
            <button className="bg-white text-background-dark px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              View all opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}