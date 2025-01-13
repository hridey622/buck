import React from 'react';
import { ArrowRight, Users, DollarSign, TrendingUp } from 'lucide-react';

interface FeaturedStartupProps {
  name: string;
  description: string;
  raised: string;
  target: string;
  investors: number;
  growth: string;
  image: string;
}

export default function FeaturedStartup({
  name,
  description,
  raised,
  target,
  investors,
  growth,
  image
}: FeaturedStartupProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <DollarSign className="h-5 w-5 mx-auto mb-1 text-blue-600" />
            <div className="text-sm text-gray-500">Raised</div>
            <div className="font-semibold">{raised}</div>
          </div>
          <div className="text-center">
            <Users className="h-5 w-5 mx-auto mb-1 text-blue-600" />
            <div className="text-sm text-gray-500">Investors</div>
            <div className="font-semibold">{investors}</div>
          </div>
          <div className="text-center">
            <TrendingUp className="h-5 w-5 mx-auto mb-1 text-blue-600" />
            <div className="text-sm text-gray-500">Growth</div>
            <div className="font-semibold">{growth}</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${(parseInt(raised.replace(/\D/g, '')) / parseInt(target.replace(/\D/g, ''))) * 100}%` }}
            ></div>
          </div>
          <span className="ml-4 text-sm text-gray-500">{target}</span>
        </div>
        
        <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
          Invest Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}