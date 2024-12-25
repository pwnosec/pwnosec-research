import React from 'react';

export const NewsletterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
        required
      />
      <button 
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};