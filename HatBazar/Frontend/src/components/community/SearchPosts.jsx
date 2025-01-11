import React from 'react';

function SearchPosts({ onSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 border rounded-lg bg-gray-800 text-white border-gray-700 focus:outline-none focus:border-violet-500"
      />
    </div>
  );
}

export default SearchPosts;