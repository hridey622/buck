import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-border">
      <div className="bg-primary/10 text-primary p-3 rounded-xl mb-4 inline-block">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{value}</h3>
      <p className="text-text-secondary">{label}</p>
    </div>
  );
}