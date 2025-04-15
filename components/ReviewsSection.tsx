'use client';

import { useState } from 'react';
import { FiStar, FiThumbsUp, FiMessageSquare } from 'react-icons/fi';

interface Review {
  id: string;
  title: string;
  content: string;
  rating: number;
  date: string;
  likes: number;
  comments: number;
  product: {
    name: string;
    image: string;
  };
}

// Mock data for reviews
const mockReviews: Review[] = [
  {
    id: '1',
    title: 'Great product, would recommend!',
    content: 'This product exceeded my expectations. The quality is amazing and it works perfectly for my needs.',
    rating: 5,
    date: '2023-08-15',
    likes: 24,
    comments: 3,
    product: {
      name: 'Google Pixel 7',
      image: '/images/pixel.jpg'
    }
  },
  {
    id: '2',
    title: 'Decent but could be better',
    content: 'The product is good overall, but there are a few issues that could be improved. Battery life isn\'t great.',
    rating: 3,
    date: '2023-07-22',
    likes: 8,
    comments: 2,
    product: {
      name: 'Google Nest Hub',
      image: '/images/nest.jpg'
    }
  },
  {
    id: '3',
    title: 'Love this product!',
    content: 'Absolutely amazing. Would buy again in a heartbeat. The customer service was also top-notch.',
    rating: 5,
    date: '2023-06-10',
    likes: 42,
    comments: 7,
    product: {
      name: 'Google Chromecast',
      image: '/images/chromecast.jpg'
    }
  }
];

export default function ReviewsSection() {
  const [reviews] = useState<Review[]>(mockReviews);

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar 
          key={i} 
          className={i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">My Reviews</h2>
        <button className="text-blue-500 text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0 last:pb-0">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                {/* Placeholder for product image */}
                <span className="text-gray-400 text-xs">{review.product.name.substring(0, 2)}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-800">{review.product.name}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                
                <div className="flex mt-1 mb-2">
                  {renderStars(review.rating)}
                </div>
                
                <h4 className="font-medium mb-1">{review.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{review.content}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <FiThumbsUp size={14} />
                    <span>{review.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <FiMessageSquare size={14} />
                    <span>{review.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-100 transition">
        Write a Review
      </button>
    </div>
  );
} 