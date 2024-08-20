import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">
          <Link to="/">Course Routine Planner</Link>
        </h1>
        <nav>
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="ml-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition-all duration-300"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
