import React, { useState } from 'react';

function ForumPost({ post }) {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleUpvote = () => setUpvotes(upvotes + 1);
  const handleDownvote = () => setDownvotes(downvotes + 1);

  const toggleComments = () => setShowComments(!showComments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-semibold text-green-800 mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>

      {/* Upvote and Downvote Buttons */}
      <div className="flex items-center space-x-4 mt-4">
        <button onClick={handleUpvote} className="text-green-700 font-semibold">
          Upvote ({upvotes})
        </button>
        <button onClick={handleDownvote} className="text-red-700 font-semibold">
          Downvote ({downvotes})
        </button>
        <button onClick={toggleComments} className="text-blue-700 font-semibold">
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-2 border rounded mb-2 bg-gray-100">
                {comment}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}

          {/* Add Comment */}
          <div className="flex mt-4 space-x-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="border p-2 flex-grow rounded"
            />
            <button
              onClick={handleAddComment}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-300"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForumPost;
