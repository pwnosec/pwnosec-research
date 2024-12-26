import React from 'react';

export const Events: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-xl font-semibold">Advanced Web Security Workshop</h2>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800">
                workshop
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">
              Learn about the latest web security techniques and best practices
            </p>

            <div className="text-sm text-gray-500">
              <p>Date: 2024-04-01</p>
              <p>Location: Online</p>
            </div>
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};