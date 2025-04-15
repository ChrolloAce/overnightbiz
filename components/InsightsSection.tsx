'use client';

import React from 'react';
import { FiInfo, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

interface Insight {
  id: string;
  title: string;
  description: string;
  value?: string;
  change?: string;
  isPositive: boolean;
}

const mockInsights: Insight[] = [
  {
    id: '1',
    title: 'Search Performance',
    description: 'Your business was shown in 27% more searches this month.',
    value: '1,247',
    change: '+27%',
    isPositive: true
  },
  {
    id: '2',
    title: 'Customer Engagement',
    description: 'Customers are interacting more with your posts.',
    value: '245',
    change: '+15%',
    isPositive: true
  },
  {
    id: '3',
    title: 'Response Time',
    description: 'Your average response time has decreased.',
    value: '32 min',
    change: '-5 min',
    isPositive: true
  },
  {
    id: '4',
    title: 'Competitor Activity',
    description: 'A new competitor has appeared in your area.',
    isPositive: false
  }
];

export default function InsightsSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FiInfo className="text-blue-500" />
          <h2 className="text-xl font-bold text-gray-800">Insights & Analytics</h2>
        </div>
        <select className="text-sm border rounded-md px-2 py-1 text-gray-600">
          <option value="7days">Last 7 days</option>
          <option value="30days">Last 30 days</option>
          <option value="90days">Last 90 days</option>
        </select>
      </div>
      
      <div className="space-y-6">
        {mockInsights.map((insight) => (
          <div key={insight.id} className="border-b pb-6 last:border-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
              
              {insight.value && (
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">{insight.value}</div>
                  {insight.change && (
                    <div className={`flex items-center justify-end text-sm ${insight.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {insight.isPositive ? (
                        <FiTrendingUp className="mr-1" size={14} />
                      ) : (
                        <FiTrendingDown className="mr-1" size={14} />
                      )}
                      <span>{insight.change}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
        View Detailed Analytics
      </button>
    </div>
  );
} 