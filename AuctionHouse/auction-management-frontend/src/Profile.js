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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-6 bg-white shadow-md">
        <div className="text-center">
          <img
            className="w-24 h-24 mx-auto mb-4 rounded-full"
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
          <h2 className="mb-2 text-xl font-semibold">{user.name}</h2>
          <p className="mb-4 text-gray-600">{user.email}</p>
          <button className="flex items-center justify-center px-4 py-2 mx-auto mb-4 space-x-2 text-white bg-red-500 rounded-lg">
            <FaFacebook />
            <span>Facebook</span>
          </button>
          <div className="p-4 mb-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500">{user.karma}</h3>
            <p className="text-gray-500">Your Karma (reputation)</p>
          </div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
            Visit Profile
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="flex p-6 space-x-8 bg-white rounded-lg shadow-lg">
          <div className="w-1/2">
            <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700">Name</label>
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
                <label className="block mb-2 text-gray-700">Email</label>
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
                <label className="block mb-2 text-gray-700">Phone</label>
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
                <label className="block mb-2 text-gray-700">Address</label>
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

          <div className="w-1/2 p-6 rounded-lg shadow-md bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold">Auction Details</h2>
            <div className="p-4 mb-4 border border-gray-300 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-xl font-bold text-gray-700">
                Bidding History
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                {user.biddingHistory.map((bid, index) => (
                  <li key={index}>{bid}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 mb-4 border border-gray-300 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-xl font-bold text-gray-700">
                Payment Method
              </h3>
              <p>{user.paymentMethod}</p>
            </div>
            <div className="flex space-x-4">
              {editMode ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-2 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 px-4 py-2 text-white bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="flex-1 px-4 py-2 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
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
