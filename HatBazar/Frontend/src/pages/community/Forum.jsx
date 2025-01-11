import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ForumPost from '../../components/community/Post';




function Forum() {
  const [posts] = useState([
    { 
      id: 1, 
      user: 'kamrul',
      date: '11/01/2025',
      title: 'Best Fertilizers for Organic Farming', 
      content: 'Here are some recommendations on the best fertilizers for organic farming...',
      comments: ['Great post! Very informative.', 'I agree with these suggestions.']
    },
    { 
      id: 2, 
      user: 'kibria',
      date: '11/01/2025',
      title: 'How to Prevent Pests Naturally?', 
      content: 'Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...',
      comments: ['Neem oil works wonders!', 'Try companion planting for pest control.']
    },
    { 
      id: 3, 
      user: 'abcd34',
      date: '11/01/2025',
      title: 'How to plant farm?', 
      content: 'Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...',
      comments: ['Neem oil works wonders!', 'Try companion planting for pest control.']
    },
    { 
      id: 4, 
      user: 'mastermind',
      date: '11/01/2025',
      title: 'how to invest optimally?', 
      content: 'Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...',
      comments: ['Neem oil works wonders!', 'Try companion planting for pest control.']
    },
    // Add more posts here
  ]);
  const [searchQuery, setSearchQuery] = useState(''); // Track the search input

  // Filter posts based on the search query
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-green-800 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Community Forum</h1>
      
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
          className="border p-2 w-1/2 rounded"
        />
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 gap-6 mt-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <ForumPost key={post.id} post={post} />
          ))
        ) : (
          <p className="text-center text-white">No posts found.</p>
        )}
      </div>
    </div>
  );
}


export default Forum;