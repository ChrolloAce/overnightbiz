'use client';

import { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ReviewsSection from '../../components/ReviewsSection';
import StatisticsCard from '../../components/StatisticsCard';
import PostsSection from '../../components/PostsSection';
import InsightsSection from '../../components/InsightsSection';
import { redirect } from 'next/navigation';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch session data
    fetch('/api/auth/session')
      .then(res => {
        if (!res.ok) {
          throw new Error('Not authenticated');
        }
        return res.json();
      })
      .then(data => {
        if (!data.user) {
          throw new Error('No user data');
        }
        setUser(data.user);
        setLoading(false);
      })
      .catch(error => {
        console.error('Authentication error:', error);
        redirect('/auth/signin');
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ProfileHeader user={user} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatisticsCard title="Total Views" value="12,453" change="+14%" />
          <StatisticsCard title="Website Clicks" value="1,234" change="+7.2%" />
          <StatisticsCard title="Direction Requests" value="567" change="+2.8%" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ReviewsSection />
            <PostsSection />
          </div>
          <div>
            <InsightsSection />
          </div>
        </div>
      </div>
    </div>
  );
} 