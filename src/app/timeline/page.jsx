"use client";
import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaCommentDots, FaVideo, FaSearch, FaFilter, FaSort } from 'react-icons/fa';

const TimelinePage = () => {
  const [entries, setEntries] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('timeline');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  const getIcon = (type) => {
    if (type === 'call') return <div className="p-3 bg-blue-100 text-blue-500 rounded-full"><FaPhoneAlt className="text-xl" /></div>;
    if (type === 'text') return <div className="p-3 bg-green-100 text-green-500 rounded-full"><FaCommentDots className="text-xl" /></div>;
    if (type === 'video') return <div className="p-3 bg-purple-100 text-purple-500 rounded-full"><FaVideo className="text-xl" /></div>;
    return null;
  };

  let filteredEntries = entries.filter((entry) => {
    const matchesType = filterType === 'all' || entry.type === filterType;
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          entry.friendName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  if (sortOrder === 'newest') {
    filteredEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    filteredEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 space-y-6">
      <h1 className="text-4xl font-bold text-center text-[#244D3F] mb-8">Timeline Of Interactions</h1>
      
      <div className="flex flex-col md:flex-row gap-4 justify-between bg-base-100 p-4 rounded-xl shadow-sm">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search by name or type..." 
            className="input input-bordered w-full pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Filters */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select 
              className="select select-bordered" 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="call">Calls</option>
              <option value="text">Texts</option>
              <option value="video">Videos</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <FaSort className="text-gray-400" />
            <select 
              className="select select-bordered" 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-8">
        {filteredEntries.length === 0 ? (
          <div className="text-center p-10 text-gray-500 bg-base-200 rounded-xl">
            No interactions found. Go check-in with your friends!
          </div>
        ) : (
          filteredEntries.map(entry => (
            <div key={entry.id} className="flex items-center gap-5 bg-base-100 p-5 rounded-xl shadow hover:shadow-md transition">
              {getIcon(entry.type)}
              <div className="flex-1">
                <h3 className="text-xl font-bold">{entry.title}</h3>
                <p className="text-gray-500 text-sm">
                  {new Date(entry.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
