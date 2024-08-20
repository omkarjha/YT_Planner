import React from 'react';

function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-600">Register</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                placeholder="Username"
                className="block w-full px-4 py-3 border border-gray-300 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="block w-full px-4 py-3 border border-gray-300 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;