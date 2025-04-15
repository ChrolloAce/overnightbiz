'use client';

import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface StatisticsCardProps {
  title: string;
  value: string;
  change?: string;
  isIncrease?: boolean;
}

export default function StatisticsCard({ title, value, change, isIncrease = true }: StatisticsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="flex items-baseline">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {change && (
          <div className={`ml-2 flex items-center text-sm ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
            {isIncrease ? (
              <FiArrowUp className="mr-1" size={14} />
            ) : (
              <FiArrowDown className="mr-1" size={14} />
            )}
            <span>{change}</span>
          </div>
        )}
      </div>
    </div>
  );
} 