'use client';

import React from 'react';
import { FiUsers, FiUserCheck, FiUserX, FiActivity } from 'react-icons/fi';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import ProfilesTable from '@/components/ProfilesTable';
import ActivityChart from '@/components/Chart';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 min-h-screen">
        <Header />
        
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back, here's an overview of your Google profiles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Total Profiles" 
              value={324} 
              icon={<FiUsers className="h-6 w-6 text-white" />} 
              color="bg-primary"
            />
            <StatsCard 
              title="Active Profiles" 
              value={267} 
              icon={<FiUserCheck className="h-6 w-6 text-white" />} 
              color="bg-green-500"
            />
            <StatsCard 
              title="Inactive Profiles" 
              value={57} 
              icon={<FiUserX className="h-6 w-6 text-white" />} 
              color="bg-red-500"
            />
            <StatsCard 
              title="Recent Activity" 
              value={128} 
              icon={<FiActivity className="h-6 w-6 text-white" />} 
              color="bg-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <ActivityChart />
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Personal</span>
                    <span className="text-sm font-medium text-gray-700">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Business</span>
                    <span className="text-sm font-medium text-gray-700">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Education</span>
                    <span className="text-sm font-medium text-gray-700">23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <ProfilesTable />
        </main>
      </div>
    </div>
  );
} 