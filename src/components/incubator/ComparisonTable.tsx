import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    criteria: 'Support',
    projects: 'No',
    incubator: 'Yes'
  },
  {
    criteria: 'Commission',
    projects: 'None',
    incubator: '5%'
  },
  {
    criteria: 'Selection Criteria',
    projects: 'Low',
    incubator: 'High'
  },
  {
    criteria: 'Resources Provided',
    projects: 'None',
    incubator: 'Mentors, Network, Tools, Funding'
  },
  {
    criteria: 'Creator Commitment',
    projects: 'Independent',
    incubator: 'Collaborative'
  },
  {
    criteria: 'Goal',
    projects: 'Visibility or Recruitment',
    incubator: 'Project Acceleration and Success'
  }
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left text-gray-400">Criteria</th>
            <th className="p-4 text-left text-gray-400">Projects Section</th>
            <th className="p-4 text-left text-gray-400">Incubator Section</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-violet-500/20">
          {comparisonData.map((row, index) => (
            <tr key={index} className="hover:bg-violet-500/5">
              <td className="p-4 text-gray-300">{row.criteria}</td>
              <td className="p-4">
                {row.projects === 'Yes' ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : row.projects === 'No' ? (
                  <X className="w-5 h-5 text-rose-400" />
                ) : (
                  <span className="text-gray-400">{row.projects}</span>
                )}
              </td>
              <td className="p-4">
                {row.incubator === 'Yes' ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : row.incubator === 'No' ? (
                  <X className="w-5 h-5 text-rose-400" />
                ) : (
                  <span className="text-gray-400">{row.incubator}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}