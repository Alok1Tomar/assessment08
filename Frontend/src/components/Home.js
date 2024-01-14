// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to SaaS App</h1>
        <p className="text-gray-600">
          Explore our plans and start your journey to efficient organization management.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-2">Basic Plan</h2>
            <p className="text-gray-600 mb-4">Free for 14 Days. Limited to 1 user.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-2">Standard Plan</h2>
            <p className="text-gray-600 mb-4">
              INR 4999 Per Year, Per User, up to 5 users.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-2">Plus Plan</h2>
            <p className="text-gray-600 mb-4">
              INR 3999 Per Year, Per User above 10 users.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
