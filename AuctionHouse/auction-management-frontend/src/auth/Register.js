import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="flex items-center justify-center h-screen mt-4 border-2">
      <div className="flex flex-col h-full px-16 py-10 border-2 md:w-2/5 md:h-auto">
        <h2 className="mb-4 text-xl font-bold text-center">
          Create New Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 text-xs border border-gray-300 focus:border-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700">
              Phone
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 text-xs border border-gray-300 focus:border-gray-600"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 text-xs border border-gray-300 focus:border-gray-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 text-xs border border-gray-300 focus:border-gray-600"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-1 text-sm text-white bg-gray-600 hover:bg-gray-800"
          >
            Register your account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600 md:text-sm ">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-gray-600 transition-colors duration-200 hover:text-black"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
