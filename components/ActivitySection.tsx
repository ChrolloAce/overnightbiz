'use client';

import { useState } from 'react';
import { FiActivity, FiShoppingBag, FiHeart, FiStar, FiClock } from 'react-icons/fi';

interface Activity {
  id: string;
  type: 'purchase' | 'like' | 'review' | 'visit';
  date: string;
  description: string;
  icon: any;
  color: string;
}

// Mock data for activities
const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'purchase',
    date: '2023-09-12',
    description: 'Purchased Google Pixel 7 Pro',
    icon: FiShoppingBag,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: '2',
    type: 'like',
    date: '2023-09-10',
    description: 'Liked Google Nest Audio',
    icon: FiHeart,
    color: 'bg-red-100 text-red-600'
  },
  {
    id: '3',
    type: 'review',
    date: '2023-09-05',
    description: 'Reviewed Google Chromecast with Google TV',
    icon: FiStar,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: '4',
    type: 'visit',
    date: '2023-09-01',
    description: 'Visited Google Store in New York',
    icon: FiClock,
    color: 'bg-purple-100 text-purple-600'
  }
];

export default function ActivitySection() {
  const [activities] = useState<Activity[]>(mockActivities);

  // Function to format date to relative time
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FiActivity className="text-blue-500" />
          <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
        </div>
        <button className="text-blue-500 text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
              <activity.icon size={18} />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-gray-800 font-medium">{activity.description}</p>
                <span className="text-sm text-gray-500">{formatDate(activity.date)}</span>
              </div>
              <p className="text-sm text-gray-500 capitalize">{activity.type}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-100 transition">
          Load More
        </button>
      </div>
    </div>
  );
} 