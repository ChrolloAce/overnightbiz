import React from 'react';
import { FiBell, FiSearch, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 ml-64">
      <div className="flex items-center w-1/3">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Search profiles..."
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-primary focus:outline-none">
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          <FiBell className="h-6 w-6" />
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">Administrator</span>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FiUser className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 