"use client";
import React from 'react';
import { FaPhoneAlt, FaCommentDots, FaVideo } from 'react-icons/fa';
import toast from 'react-hot-toast';

const QuickCheckIn = ({ friendName }) => {
  const handleCheckIn = (type) => {
    let icon, titleText;
    if (type === 'call') {
      titleText = `Call with ${friendName}`;
    } else if (type === 'text') {
      titleText = `Text with ${friendName}`;
    } else if (type === 'video') {
      titleText = `Video with ${friendName}`;
    }

    const newEntry = {
      id: Date.now().toString(),
      type,
      title: titleText,
      friendName,
      date: new Date().toISOString(),
    };

    const existingEntries = JSON.parse(localStorage.getItem('timeline') || '[]');
    localStorage.setItem('timeline', JSON.stringify([newEntry, ...existingEntries]));

    toast.success(`${titleText} logged!`);
  };

  return (
    <div className="flex justify-between gap-5">
      <button onClick={() => handleCheckIn('call')} className="flex flex-col items-center p-6 btn btn-lg btn-ghost h-auto shadow transition">
        <FaPhoneAlt className="text-3xl text-blue-500 mb-2" />
        Call
      </button>
      <button onClick={() => handleCheckIn('text')} className="flex flex-col items-center p-6 btn btn-lg btn-ghost h-auto shadow transition">
        <FaCommentDots className="text-3xl text-green-500 mb-2" />
        Text
      </button>
      <button onClick={() => handleCheckIn('video')} className="flex flex-col items-center p-6 btn btn-lg btn-ghost h-auto shadow transition">
        <FaVideo className="text-3xl text-purple-500 mb-2" />
        Video
      </button>
    </div>
  );
};

export default QuickCheckIn;
