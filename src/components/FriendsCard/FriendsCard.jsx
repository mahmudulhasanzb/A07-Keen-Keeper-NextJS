"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const FriendsCard = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error("Failed to fetch friends:", error);
      } finally {
        setLoading(false);
      }
    };
    
    // Simulate slight delay to make loading animation visible if needed
    setTimeout(fetchFriends, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner text-[#244D3F] loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold">Your Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {friends.map(friend => (
          <Link
            key={friend.id}
            href={`/friends/${friend.id}`}
            className="card bg-base-100 hover:bg-base-200 shadow-sm duration-700 transition-all"
          >
            <figure className="px-10 pt-10">
              <img
                src={friend.picture}
                alt={friend.name}
                className="rounded-full w-24 h-24 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center space-y-2">
              <h2 className="card-title text-2xl">{friend.name}</h2>
              <small className="text-gray-500 text-sm">
                {friend.days_since_contact}d ago
              </small>
              <div className="badge badge-soft badge-success bg-[#CBFADB] text-[#244D3F] rounded-full p-3 ">
                {friend.tags[0]}
              </div>
              <div
                className={`badge rounded-full text-white p-3
                ${friend.status == 'Almost Due' ? 'badge-warning text-black' : ''} ${friend.status == 'Overdue' ? 'bg-red-500' : ''} ${friend.status == 'On-track' ? 'bg-[#244D3F]' : ''}`}
              >
                {friend.status}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsCard;
