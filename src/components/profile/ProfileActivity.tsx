import React from 'react';
import { Circle } from 'lucide-react';

export default function ProfileActivity() {
  const activities = [
    {
      type: 'project',
      title: 'Started working on E-commerce Platform',
      date: '2024-03-15',
      description: 'Joined as a Full Stack Developer'
    },
    {
      type: 'review',
      title: 'Received a 5-star review',
      date: '2024-03-10',
      description: 'Great work and communication throughout the project'
    },
    {
      type: 'payment',
      title: 'Received payment for Marketing Campaign',
      date: '2024-03-05',
      description: 'Successfully completed milestone 2'
    }
  ];

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <Circle className="w-2 h-2 text-violet-400 mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(activity.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}