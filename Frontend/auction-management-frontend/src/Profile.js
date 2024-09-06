import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profileImage: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulate an API call with dummy data
    setTimeout(() => {
      const dummyUser = {
        name: "Jim Armstrong",
        email: "jim_armstrong@example.com",
        phone: "+1-541-754-3010",
        address: "United States",
        profileImage: "https://via.placeholder.com/150",
        karma: "95K",
        biddingHistory: ["Auction #123", "Auction #456", "Auction #789"],
        paymentMethod: "Visa - **** 4242",
      };
      setUser(dummyUser);
      setFormData(dummyUser);
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevState) => ({
        ...prevState,
        profileImage: imageUrl,
      }));
    }
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setFormData(user);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-md">
        <div className="text-center">
          <img
            className="rounded-full w-24 h-24 mx-auto mb-4"
            src={formData.profileImage || "https://via.placeholder.com/150"}
            alt="User Profile"
          />
          {editMode ? (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
          ) : null}
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 mx-auto mb-4">
            <FaFacebook />
            <span>Facebook</span>
          </button>
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <h3 className="text-2xl font-bold text-red-500">{user.karma}</h3>
            <p className="text-gray-500">Your Karma (reputation)</p>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Visit Profile
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex space-x-8">
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-md"
                  />
                ) : (
                  <p className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    {user.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-md"
                  />
                ) : (
                  <p className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    {user.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                {editMode ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-md"
                  />
                ) : (
                  <p className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    {user.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                {editMode ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg shadow-md"
                  />
                ) : (
                  <p className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                    {user.address}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Auction Details</h2>
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-4">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Bidding History
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {user.biddingHistory.map((bid, index) => (
                  <li key={index}>{bid}</li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-4">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Payment Method
              </h3>
              <p>{user.paymentMethod}</p>
            </div>
            <div className="flex space-x-4">
              {editMode ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
