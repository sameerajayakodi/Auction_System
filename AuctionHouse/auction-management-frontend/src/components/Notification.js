// components/Notification.js
import React, { useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Notification will close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed px-4 py-2 text-white bg-green-500 rounded-lg top-4 right-4">
      {message}
    </div>
  );
};

export default Notification;
