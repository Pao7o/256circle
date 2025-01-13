import React from 'react';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';
import EmojiAvatar from '../components/common/EmojiAvatar';
import BackToDashboard from '../components/common/BackToDashboard';

const reviews = [
  {
    id: 1,
    from: 'Project Alpha',
    author: 'John Smith',
    rating: 5,
    comment: 'Excellent work and communication throughout the project. Delivered ahead of schedule.',
    date: '2024-03-10',
    helpful: 12
  },
  // ... ajoutez plus de reviews
];

export default function AllReviews() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <BackToDashboard />
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Reviews</h1>
            <p className="text-gray-400 mt-2">See what others are saying about your work</p>
          </div>
        </div>

        <div className="grid gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <EmojiAvatar name={review.author} size="md" />
                  <div>
                    <h3 className="font-medium">{review.from}</h3>
                    <p className="text-sm text-gray-400">{review.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{review.comment}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    {review.helpful} found helpful
                  </button>
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    Reply
                  </button>
                </div>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}