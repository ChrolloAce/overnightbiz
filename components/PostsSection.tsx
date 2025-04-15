'use client';

import React from 'react';
import { FiMessageSquare, FiEdit, FiThumbsUp, FiShare2 } from 'react-icons/fi';

interface Post {
  id: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    content: 'Just launched our newest product! Check out our website for more details.',
    date: '2023-09-15',
    likes: 45,
    comments: 12,
    shares: 8,
    image: '/images/product-launch.jpg'
  },
  {
    id: '2',
    content: 'Thank you to all our customers for your support. We appreciate your business!',
    date: '2023-09-01',
    likes: 72,
    comments: 8,
    shares: 5
  },
  {
    id: '3',
    content: 'We are excited to announce that we will be attending the industry expo next month. Come visit our booth!',
    date: '2023-08-22',
    likes: 34,
    comments: 6,
    shares: 10
  }
];

export default function PostsSection() {
  // Format the date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Posts</h2>
        <button className="text-blue-500 text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      
      <div className="space-y-6">
        {mockPosts.map((post) => (
          <div key={post.id} className="border-b pb-6 last:border-0 last:pb-0">
            <div className="mb-3">
              <p className="text-gray-800">{post.content}</p>
              {post.image && (
                <div className="mt-3 h-40 bg-gray-100 rounded-md overflow-hidden">
                  {/* Placeholder for post image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Post Image</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{formatDate(post.date)}</span>
              
              <div className="flex space-x-4">
                <div className="flex items-center gap-1">
                  <FiThumbsUp size={14} />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMessageSquare size={14} />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiShare2 size={14} />
                  <span>{post.shares}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 flex items-center justify-center w-full py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-100 transition">
        <FiEdit className="mr-2" size={14} />
        Create New Post
      </button>
    </div>
  );
} 