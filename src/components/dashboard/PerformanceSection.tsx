import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const reviews = [
  {
    from: 'Project Alpha',
    rating: 5,
    comment: 'Excellent work and communication',
    date: '2024-03-10'
  },
  {
    from: 'Marketing Campaign',
    rating: 4,
    comment: 'Great results, slightly delayed',
    date: '2024-03-05'
  }
];

export default function PerformanceSection() {
  const navigate = useNavigate();
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const completedProjects = 24;

  const handleSeeAll = () => {
    navigate('/reviews');
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Feedback</h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-black/20 rounded-lg p-4">
          <p className="text-sm text-gray-400">Average Rating</p>
          <div className="mt-2 flex items-center gap-2">
            <h3 className="text-2xl font-bold">{averageRating.toFixed(1)}</h3>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.round(averageRating) ? 'fill-violet-400 text-violet-400' : 'text-gray-600'}`} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black/20 rounded-lg p-4">
          <p className="text-sm text-gray-400">Projects Completed</p>
          <div className="mt-2">
            <h3 className="text-2xl font-bold">{completedProjects}</h3>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Recent Reviews</h3>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 bg-black/20 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{review.from}</h4>
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400">{review.comment}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleSeeAll}
          className="text-sm text-violet-400 hover:text-violet-300 inline-flex items-center gap-2"
        >
          See all reviews
        </button>
      </div>
    </div>
  );
}