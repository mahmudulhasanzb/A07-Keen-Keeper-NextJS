import React from 'react';
import friends from '../../../../public/data.json';
import { FaBellSlash } from 'react-icons/fa6';
import { MdOutlineDeleteForever, MdEdit } from 'react-icons/md';
import { FaArchive } from 'react-icons/fa';
import QuickCheckIn from '@/components/QuickCheckIn/QuickCheckIn';

const FriendsDetailPage = async ({ params }) => {
  const { friendId } = await params;

  const expectedFriend = friends.find(friend => friend.id == friendId);

  if (!expectedFriend) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500">
        Friend not found
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-10 max-w-6xl mx-auto p-4">
      {/* left side content */}
      <div className="space-y-4 w-full md:max-w-80">
        <div className="card shadow-md bg-base-100">
          <figure className="px-10 pt-10">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="rounded-full w-40 h-40 object-cover shadow-sm"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">
              {expectedFriend.name}
            </h2>
            <div
              className={`badge rounded-full text-white px-4 py-3
                      ${expectedFriend.status == 'Almost Due' ? 'badge-warning text-black' : ''} ${expectedFriend.status == 'Overdue' ? 'bg-red-500' : ''} ${expectedFriend.status == 'On-track' ? 'bg-[#244D3F]' : ''}`}
            >
              {expectedFriend.status}
            </div>
            <div className="badge badge-soft badge-success bg-[#CBFADB] text-[#244D3F] rounded-full px-4 py-3 mt-2">
              {expectedFriend.tags[0]}
            </div>

            <p className="text-gray-600 mt-4 italic">"{expectedFriend.bio}"</p>
            <p className="text-gray-500 text-sm mt-2">{expectedFriend.email}</p>
          </div>
        </div>
        <div className="space-y-3">
          <button className="btn w-full shadow-sm hover:bg-gray-100 hover:text-black">
            <FaBellSlash className="text-xl" /> Snooze 2 Weeks
          </button>
          <button className="btn w-full shadow-sm hover:bg-gray-100 hover:text-black">
            <FaArchive className="text-xl" /> Archive
          </button>
          <button className="btn w-full shadow-sm text-red-500 hover:bg-red-50 hover:text-red-600">
            <MdOutlineDeleteForever className="text-xl" /> Delete
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className="space-y-6 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-8 bg-base-100 rounded-2xl shadow-md text-center transition hover:shadow-lg">
            <p className="text-5xl font-bold text-[#244D3F] mb-2">
              {expectedFriend.days_since_contact}
            </p>
            <p className="text-gray-500 font-medium">Days Since Contact</p>
          </div>
          <div className="p-8 bg-base-100 rounded-2xl shadow-md text-center transition hover:shadow-lg">
            <p className="text-5xl font-bold text-[#244D3F] mb-2">
              {expectedFriend.goal}
            </p>
            <p className="text-gray-500 font-medium">Goal (Days)</p>
          </div>
          <div className="p-8 bg-base-100 rounded-2xl shadow-md text-center transition hover:shadow-lg">
            <p className="text-xl font-bold text-[#244D3F] mb-4 mt-3">
              {new Date(expectedFriend.next_due_date).toLocaleDateString()}
            </p>
            <p className="text-gray-500 font-medium mt-6">Next Due Date</p>
          </div>
        </div>

        <div className="p-6 bg-base-100 rounded-2xl shadow-md space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-[#244D3F] font-bold text-lg">
              Relationship Goal
            </p>
            <button className="btn btn-sm btn-ghost hover:bg-gray-100">
              <MdEdit className="text-lg" /> Edit
            </button>
          </div>
          <p className="text-gray-500 text-lg">
            Contact every{' '}
            <span className="text-black font-bold">
              {expectedFriend.goal} days
            </span>
          </p>
        </div>

        <div className="p-6 bg-base-100 rounded-2xl shadow-md space-y-6">
          <h4 className="text-[#244D3F] font-bold text-xl">Quick Check-In</h4>
          <QuickCheckIn friendName={expectedFriend.name} />
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailPage;
