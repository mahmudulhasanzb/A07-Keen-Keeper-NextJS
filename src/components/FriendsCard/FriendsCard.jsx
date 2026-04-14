import Link from 'next/link';
import React from 'react';

const FriendsCard = async () => {
  const res = await fetch('http://localhost:3000/data.json');
  const freinds = await res.json();
  console.log(freinds);
  return (
    <div className="space-y-3 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold">Your Friends</h3>
      <div className="grid grid-cols-4 gap-5">
        {freinds.map(freind => (
          <Link key={freind.id}
            href={`/friends`}
            className="card bg-base-100 shadow-sm hover:border hover:border-[#244D3F]">
            <figure className="px-10 pt-10">
              <img
                src={freind.picture}
                alt={freind.name}
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center space-y-2">
              <h2 className="card-title text-2xl">{freind.name}</h2>
              <small className="text-gray-500 text-sm">
                {freind.days_since_contact}d ago
              </small>
              <div className="badge badge-soft badge-success bg-[#CBFADB] text-[#244D3F] rounded-full p-3 ">
                {freind.tags[0]}
              </div>
              <div
                className={`badge rounded-full text-white p-3
                ${freind.status == 'Almost Due' ? 'badge-warning' : ''} ${freind.status == 'Overdue' ? 'bg-red-500' : ''} ${freind.status == 'On-track' ? 'bg-[#244D3F]' : ''}`}
              >
                {freind.status}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsCard;