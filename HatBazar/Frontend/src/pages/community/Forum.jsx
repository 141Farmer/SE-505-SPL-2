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
      user: 'kamrul',
      date: '11/01/2025',
      title: 'How to Prevent Pests Naturally?', 
      content: 'Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...',
      comments: ['Neem oil works wonders!', 'Try companion planting for pest control.']
    },
    { 
      id: 3, 
      user: 'kamrul',
      date: '11/01/2025',
      title: 'How to Prevent Pests Naturally?', 
      content: 'Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...',
      comments: ['Neem oil works wonders!', 'Try companion planting for pest control.']
    },
    { 
      id: 4, 
      user: 'kamrul',
      date: '11/01/2025',
      title: 'How to Prevent Pests Naturally?', 
      content: 'Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...Looking for effective methods to prevent pests without chemicals...',
      comments: ['Neem oil works wonders!', 'Try companion planting for pest control.']
    },
    // Add more posts here
  ]);

  return (
    <div className="p-8 bg-green-800 min-h-screen">
      <Navbar/>
      <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Community Forum</h1>
      
      {/* Post Grid */}
      <div className="grid grid-cols-1 gap-6 mt-4">
        {posts.map(post => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Forum;