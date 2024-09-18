import React, { useState } from "react";
import { Link } from "react-router-dom";
import blackLogo from "../images/blackLogo.png";
import antiqueVase from "../images/vase.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="flex flex-col w-full h-screen overflow-hidden rounded-none shadow-2xl bg-slate-100 md:flex-row ">
        <div className="flex flex-col justify-center w-full p-10 md:w-1/3">
          <h2 className="mb-4 text-2xl font-bold text-center">
            <img
              src={blackLogo}
              width={250}
              className="m-auto my-2"
              alt="Logo"
            />
            Sign In
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-1 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-1 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-700 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-indigo-600 transition-colors duration-200 hover:text-indigo-800"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden w-full md:block md:w-2/3">
          <img
            src={antiqueVase}
            alt="Login visual"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
