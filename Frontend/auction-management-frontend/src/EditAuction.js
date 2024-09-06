import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "./axiosConfig"; // Adjust the path

const EditAuction = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startingBid: 0,
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const response = await axios.get(`/admin/auctions/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching auction:", error);
      }
    };
    fetchAuction();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/admin/auctions/${id}`, formData);
      navigate("/admin/auctions");
    } catch (error) {
      console.error("Error editing auction:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Edit Auction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block">Starting Bid</label>
          <input
            type="number"
            name="startingBid"
            value={formData.startingBid}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="p-2 text-white bg-yellow-500 rounded-lg"
        >
          Update Auction
        </button>
      </form>
    </div>
  );
};

export default EditAuction;
