import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../images/facebook.png";
import googleLogo from "../images/google.png";
import logo from "../images/hopelink.png";
import loginImage from "../images/loginImage.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-purple-600">
      <div className="flex flex-col w-full h-screen overflow-hidden bg-white rounded-none shadow-2xl md:flex-row ">
        <div className="flex flex-col justify-center w-full p-6 md:w-1/3">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
            <img src={logo} width={250} className="m-auto my-2" alt="Logo" />
            Sign In
          </h2>

          <button className="flex items-center justify-center w-full px-3 py-2 mb-2 text-white bg-black border border-gray-300 rounded-lg hover:bg-gray-700">
            <img src={googleLogo} alt="Google logo" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>

          <button className="flex items-center justify-center w-full px-3 py-2 mb-3 text-white bg-[#1877F2] border border-gray-300 rounded-lg hover:bg-white hover:text-black">
            <img
              src={facebookLogo}
              alt="Facebook logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Facebook
          </button>

          <div className="relative mb-4 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative px-2 text-gray-500 bg-white">or</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
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
            src={loginImage}
            alt="Login visual"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
