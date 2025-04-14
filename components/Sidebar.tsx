import React from 'react';
import Link from 'next/link';
import { FiHome, FiUsers, FiSettings, FiActivity, FiFolder, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg w-64 h-screen fixed left-0 top-0">
      <div className="p-6 flex items-center space-x-3">
        <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center">
          <span className="text-white font-bold text-xl">G</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Profile Manager</h1>
        </div>
      </div>
      
      <nav className="mt-6">
        <div className="px-4">
          <span className="text-xs text-gray-400 font-semibold">MAIN</span>
          <div className="mt-2 space-y-2">
            <Link href="/">
              <div className="flex items-center text-gray-700 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-primary">
                <FiHome className="h-5 w-5 mr-3" />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link href="/profiles">
              <div className="flex items-center text-gray-700 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-primary">
                <FiUsers className="h-5 w-5 mr-3" />
                <span>Profiles</span>
              </div>
            </Link>
            <Link href="/activities">
              <div className="flex items-center text-gray-700 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-primary">
                <FiActivity className="h-5 w-5 mr-3" />
                <span>Activities</span>
              </div>
            </Link>
            <Link href="/documents">
              <div className="flex items-center text-gray-700 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-primary">
                <FiFolder className="h-5 w-5 mr-3" />
                <span>Documents</span>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="px-4 mt-8">
          <span className="text-xs text-gray-400 font-semibold">SETTINGS</span>
          <div className="mt-2 space-y-2">
            <Link href="/settings">
              <div className="flex items-center text-gray-700 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-primary">
                <FiSettings className="h-5 w-5 mr-3" />
                <span>Settings</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
        <button className="flex items-center text-gray-700 py-2.5 px-4 w-full rounded transition duration-200 hover:bg-gray-100 hover:text-primary">
          <FiLogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 