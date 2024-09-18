import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-start justify-center w-full h-screen mt-4">
      <div className="flex flex-col w-full h-full p-16 md:w-2/5 md:h-auto">
        <p className="mb-4 text-xl font-bold text-center">
          Welcome back to Auctions!
        </p>

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
          <div className="mb-4">
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
          <button
            type="submit"
            className="w-full px-4 py-1 text-sm text-white bg-gray-600 hover:bg-gray-800 "
          >
            Login to your account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600 md:text-sm ">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-gray-600 transition-colors duration-200 hover:text-black"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
