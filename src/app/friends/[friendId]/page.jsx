import React from 'react';
import friends from '../../../../public/data.json';

const FriendsDetailPage = async ({ params }) => {
  const { friendId } = await params;

  //
  // const res = await fetch('http://localhost:3000/data.json');
  // const friends = await res.json();
  const expectedFriend = friends.find(friend => friend.id == friendId);
  console.log(expectedFriend);
  //
  return (
    <div className="flex gap-5 mt-10 max-w-6xl mx-auto">
      {/* left side content */}
      <div className="space-y-4 max-w-80">
        <div className="card shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">{expectedFriend.name}</h2>
            <div
              className={`badge rounded-full text-white
                      ${expectedFriend.status == 'Almost Due' ? 'badge-warning' : ''} ${expectedFriend.status == 'Overdue' ? 'bg-red-500' : ''} ${expectedFriend.status == 'On-track' ? 'bg-[#244D3F]' : ''}`}
            >
              {expectedFriend.status}
            </div>
            <div className="badge badge-soft badge-success bg-[#CBFADB] text-[#244D3F] rounded-full">
              {expectedFriend.tags[0]}
            </div>

            <p className="text-gray-500 ">{expectedFriend.bio}</p>
            <p className="text-gray-500 ">{expectedFriend.email}</p>
          </div>
        </div>
        <div className="space-y-4">
          <button className="btn btn-ghost w-full shadow">Snoze 2 Weeks</button>
          <button className="btn btn-ghost w-full shadow">Archive</button>
          <button className="btn btn-ghost w-full shadow text-red-500">
            Delete
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className="space-y-5 max-w-4xl">
        <div className="flex justify-between gap-5">
          <div className="p-5 max-w-full shadow-sm text-center">
            <p className="text-2xl font-bold text-[#244D3F]">
              {expectedFriend.days_since_contact}
            </p>
            <p className="text-gray-500">Days Since Contact</p>
          </div>
          <div className="p-5 max-w-full shadow-sm text-center">
            <p className="text-2xl font-bold text-[#244D3F]">
              {expectedFriend.goal}
            </p>
            <p className="text-gray-500">Goal (Days)</p>
          </div>
          <div className="p-5 max-w-full shadow-sm text-center">
            <p className="text-2xl font-bold text-[#244D3F]">
              {expectedFriend.next_due_date}
            </p>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>
        <div className="p-3 space-y-2 shadow-sm">
          <div className="flex justify-between">
            <p className="text-[#244D3F] font-bold">Relationship Goal</p>
            <button className="btn btn-sm btn-ghost">Edit</button>
          </div>
          <p className="text-gray-500">
            Contact every <span className="text-black font-bold">30 days</span>
          </p>
        </div>
        <div className="p-5 shadow-sm space-y-4">
          <h4 className="text-[#244D3F] font-bold">Quick Check-In</h4>
          <div className="flex justify-between gap-5">
            <button className="flex flex-col p-10 btn btn-ghost shadow-sm">
              <img src="img" alt="img" />
              Call
            </button>
            <button className="flex flex-col p-10 btn btn-ghost shadow-sm">
              <img src="img" alt="img" />
              Text
            </button>
            <button className="flex flex-col p-10 btn btn-ghost shadow-sm">
              <img src="img" alt="img" />
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailPage;
