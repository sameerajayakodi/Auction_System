import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  FaArrowRight,
  FaBell,
  FaFacebook,
  FaInstagram,
  FaList,
  FaLock,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import background from "./images/background.jpg";
import auction1 from "./images/item (10).jpg";
import auction2 from "./images/item (11).jpg";
import auction3 from "./images/item (12).jpg";
import auction4 from "./images/item (16).jpg";
const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const nextAuctionDate = new Date("2024-10-30T00:00:00"); 

    const interval = setInterval(() => {
      const now = new Date();
      const difference = nextAuctionDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     
      <div className="relative h-screen">
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
            <h1 className="mb-4 text-6xl font-bold">
              Welcome to Auction House
            </h1>
            <p className="mb-8 text-2xl font-semibold">
              Discover unique auctions and place your bids
            </p>
            <Link
              to="/auctions"
              className="flex items-center px-8 py-3 text-xl font-bold text-white transition duration-300 bg-[#7E4EAA] rounded-full hover:bg-purple-900"
            >
              Explore Auctions
              <FaArrowRight className="ml-2" />{" "}
            
            </Link>
          </div>
        </div>
      
        <div className="absolute right-0 flex flex-col items-center p-6 py-8 text-center transform -translate-x-1/2 bg-white shadow-2xl rounded-b-3xl top-2 ">
          <span className="text-2xl font-bold text-gray-900">
            Next Auction Starts In
          </span>
          <div className="text-4xl font-bold text-gray-900 font-inter">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        </div>
      </div>

     
      <div className="flex items-center justify-center px-6 py-16 text-center">
        <div className="container flex justify-between w-full space-x-4 overflow-x-auto scrolling-touch bg-white rounded-full shadow-xl no-scrollbar">
         
          <div className="flex flex-col items-center w-1/4 p-4">
            <h3 className="mb-2 text-5xl font-bold ">
              <CountUp start={0} end={1200} duration={3} />+ 
            </h3>
            <p className="text-lg font-semibold text-gray-700">Total Items</p>
          </div>

        
          <div className="flex flex-col items-center w-1/4 p-4 ">
            <h3 className="mb-2 text-5xl font-bold">
              <CountUp start={0} end={450} duration={3} />+ 
            </h3>
            <p className="text-lg font-semibold text-gray-700">Total Users</p>
          </div>

       
          <div className="flex flex-col items-center w-1/4 p-4 ">
            <h3 className="mb-2 text-5xl font-bold">
              <CountUp start={0} end={90} duration={3} />+{" "}
            
            </h3>
            <p className="text-lg font-semibold">Total Auctions</p>
          </div>

        
          <div className="flex flex-col items-center w-1/4 p-4 ">
            <h3 className="mb-2 text-5xl font-bold ">
              <CountUp start={0} end={50} duration={3} />+{" "}
             
            </h3>
            <p className="text-lg font-semibold text-gray-700">
              Featured Auctions
            </p>
          </div>
        </div>
      </div>

     

      <div className="px-6 py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-12 text-5xl font-bold text-center text-gray-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          
            <div className="relative p-8 ">
              <div className="absolute top-0 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full shadow-lg left-1/2">
                <svg
                  className="w-10 h-10" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12V16M12 12V16M8 12V16M12 4v4m8 2a8 8 0 11-16 0 8 8 0 0116 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 mb-4 text-3xl font-semibold text-gray-800">
                Step 1: Register
              </h3>
              <p className="text-lg text-gray-600">
                {" "}
               
                Create an account to participate in auctions and track your
                bids.
              </p>
            </div>

            <div className="relative p-8 bg-white ">
              <div className="absolute top-0 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full shadow-lg left-1/2">
                <svg
                  className="w-10 h-10" 
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-4.553a1.5 1.5 0 10-2.121-2.121L12 8.879 6.568 3.447a1.5 1.5 0 00-2.121 2.121L9 10M19 10v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 mb-4 text-3xl font-semibold text-gray-800">
                Step 2: Browse Auctions
              </h3>
              <p className="text-lg text-gray-600">
                {" "}
               
                Find auctions that interest you and place your bids in
                real-time.
              </p>
            </div>

           
            <div className="relative p-8 ">
              <div className="absolute top-0 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full shadow-lg left-1/2">
                <svg
                  className="w-10 h-10" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16v-2m0 0V8m0 6h8m4 4h.01M3 16h.01M12 20v-4m0 0H8m4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 mb-4 text-3xl font-semibold text-gray-800">
                Step 3: Win & Collect
              </h3>
              <p className="text-lg text-gray-600">
                {" "}
               
                Win auctions and get notified instantly. Securely pay and
                receive your items.
              </p>
            </div>
          </div>
        </div>
      </div>

     
     
      <div className="py-16 bg-gray-800 ">
        <div className="container mx-auto">
          <h2 className="mb-10 text-4xl font-bold text-center text-white">
            Upcoming Auctions
          </h2>
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
        

            <img
              src={auction1} 
              alt="Vintage Car Auction"
              className="w-full h-full mb-4 rounded-lg"
            />


            <img
              src={auction2} 
              alt="Luxury Watch Auction"
              className="w-full h-full mb-4 rounded-lg"
            />

          
            <img
              src={auction3} 
              alt="Antique Artifacts Auction"
              className="w-full h-full mb-4 rounded-lg"
            />

            <img
              src={auction4} 
              alt="Rare Book Auction"
              className="w-full h-full mb-4 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container px-8 mx-auto">
          <h2 className="mb-10 text-4xl font-bold text-center text-gray-900">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          
            <div className="relative p-10 py-20 overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 opacity-5"></div>
              <FaList className="mx-auto mb-6 text-4xl text-gray-700" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Wide Selection
              </h3>
              <p className="text-lg text-gray-600">
                We offer a wide variety of auctions, from rare collectibles to
                the latest gadgets.
              </p>
            </div>

            <div className="relative p-10 py-20 overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 opacity-5"></div>
              <FaLock className="mx-auto mb-6 text-4xl text-gray-700" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Secure Bidding
              </h3>
              <p className="text-lg text-gray-600">
                Our platform ensures a safe and secure bidding experience for
                all users.
              </p>
            </div>

            <div className="relative p-10 py-20 overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 opacity-5"></div>
              <FaBell className="mx-auto mb-6 text-4xl text-gray-700" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Real-time Updates
              </h3>
              <p className="text-lg text-gray-600">
                Get real-time notifications and updates on your bids and
                auctions.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="px-6 py-16 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic text-gray-600">
                "Auction House helped me find a rare collectible I was searching
                for. The bidding process was smooth and secure."
              </p>
              <h3 className="text-xl font-semibold">Kasun Perera</h3>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic text-gray-600">
                "I love the variety of items available. The real-time updates
                kept me on track with my bids!"
              </p>
              <h3 className="text-xl font-semibold">Nipunika Hettiarachchi</h3>
            </div>
          </div>
        </div>
      </div>

    

 
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-10 text-4xl font-bold text-center text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                How do I register for an auction?
              </h3>
              <p className="text-lg text-gray-600">
                To register, simply click on the "Register" button at the top
                right of the page and fill in your details.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Is bidding secure on your platform?
              </h3>
              <p className="text-lg text-gray-600">
                Yes, we use state-of-the-art security protocols to ensure that
                all your transactions are safe.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                What items can I auction?
              </h3>
              <p className="text-lg text-gray-600">
                You can auction almost any item, ranging from antiques to
                electronics. Make sure it complies with our auction rules.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-10 mt-auto text-gray-300 bg-gray-900">
        <div className="container flex flex-col items-center justify-between px-8 mx-auto md:flex-row md:items-start">
 
          <div className="text-center md:text-left md:w-1/2">
            <h3 className="mb-4 text-lg font-semibold text-white">
              What is Auction House?
            </h3>
            <p className="mb-6">
              Auction House is a premier platform for buying and selling unique
              items through competitive auctions. Discover, bid, and win
              incredible items while enjoying a transparent and engaging auction
              experience.
            </p>
          </div>

          <div className="mt-8 text-center md:text-right md:w-1/2 md:mt-0">
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/auctions" className="hover:text-white">
                  Explore Auctions
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex justify-center mt-6 space-x-4 md:justify-end">
              <a
                href="https://facebook.com"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                className="text-white hover:text-gray-400"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

      
        <div className="pt-4 mt-8 text-center text-gray-400 border-t border-gray-700">
          <p>© 2024 Auction House. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

