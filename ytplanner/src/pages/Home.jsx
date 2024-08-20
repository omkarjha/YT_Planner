import React from 'react';
import PlaylistForm from '../components/PlaylistForm';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Course Routine Planner</h1>
      <PlaylistForm />
    </div>
  );
}

export default Home;
