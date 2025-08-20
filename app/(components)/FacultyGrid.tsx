'use client';
import { useState } from 'react';
import facultyData from '@lib/facultyData';

const departments = Array.from(new Set(facultyData.map(f => f.department)));

export default function FacultyGrid() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = facultyData.filter(f =>
    (filter === 'All' || f.department === filter) &&
    (f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.designation.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 items-center mb-6">
        <input
          type="text"
          placeholder="Search faculty..."
          className="input input-bordered rounded w-full md:w-64"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="input input-bordered rounded w-full md:w-48"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="All">All Departments</option>
          {departments.map(dep => (
            <option key={dep}>{dep}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(f => (
          <div key={f.name} className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 text-center hover:shadow-lg">
            <img
              src={f.photo}
              alt={f.name}
              className="w-24 h-24 mx-auto rounded-full object-cover my-2 border-4 border-secondary"
              loading="lazy"
            />
            <h3 className="mt-2 font-bold text-lg text-primary">{f.name}</h3>
            <div className="text-secondary font-medium text-sm">{f.designation}</div>
            <div className="text-gray-500 text-xs mt-1">{f.department}</div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 dark:text-gray-300 py-4">No matching faculty found.</div>
        )}
      </div>
    </div>
  );
}
