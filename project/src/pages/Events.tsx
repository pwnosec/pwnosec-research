import React from 'react';
import { Event } from '../types';

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Advanced Web Security Workshop',
    description: 'Learn about the latest web security techniques and best practices',
    date: '2024-04-01',
    type: 'workshop',
    location: 'Online',
    registrationUrl: '#'
  },
  // Add more mock data as needed
];

export const Events: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="space-y-6">
        {MOCK_EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {event.type}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
              </div>
              <a
                href={event.registrationUrl}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};