'use client';

import Image from 'next/image';
import { FiEdit, FiMapPin, FiLink } from 'react-icons/fi';

interface User {
  name?: string;
  email?: string;
  image?: string;
}

interface ProfileHeaderProps {
  user: User | null;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  if (!user) return null;

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {user.image ? (
                <Image 
                  src={user.image} 
                  alt={user.name || 'Profile'} 
                  width={128} 
                  height={128} 
                  className="object-cover h-full w-full"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-3xl text-gray-400">
                    {user.name?.charAt(0) || user.email?.charAt(0) || '?'}
                  </span>
                </div>
              )}
            </div>
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md">
              <FiEdit size={16} />
            </button>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {user.name || 'User'}
            </h1>
            <p className="text-gray-500">{user.email}</p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4 justify-center md:justify-start">
              <div className="flex items-center text-gray-600">
                <FiMapPin className="mr-1" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiLink className="mr-1" />
                <a href="#" className="text-blue-500 hover:underline">mywebsite.com</a>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Edit Profile
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 