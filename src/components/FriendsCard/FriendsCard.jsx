import Link from 'next/link';
import React from 'react';
import friends from '../../../public/data.json';

const FriendsCard = () => {
  return (
    <div className="space-y-3 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold">Your Friends</h3>
      <div className="grid grid-cols-4 gap-5">
        {friends.map(friend => (
          <Link
            key={friend.id}
            href={`/friends/${friend.id}`}
            className="card bg-base-100 shadow-sm hover:border hover:border-[#244D3F]"
          >
            <figure className="px-10 pt-10">
              <img
                src={friend.picture}
                alt={friend.name}
                className="rounded-full"
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
                ${friend.status == 'Almost Due' ? 'badge-warning' : ''} ${friend.status == 'Overdue' ? 'bg-red-500' : ''} ${friend.status == 'On-track' ? 'bg-[#244D3F]' : ''}`}
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
