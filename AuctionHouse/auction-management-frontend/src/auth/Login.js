import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:44377/api/users/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setLoginError(errorData.message || "Login failed.");
      } else {
        // Handle successful login
        // Redirect to dashboard or home page
        navigate("/dashboard"); // Update to your desired path
      }
    } catch (error) {
      setLoginError("Network error, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-2xl p-10">
        {/* Optional: Logo */}
        <div className="flex justify-center mb-6">
          <p className="text-xl font-bold text-gray-500">AuctionHouse.lk</p>
        </div>

        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>
          {loginError && <p className="mb-4 text-red-600">{loginError}</p>}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-sm text-gray-700 transition duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-sm text-gray-700 transition duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 text-sm font-semibold text-white transition duration-200 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login to Your Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
