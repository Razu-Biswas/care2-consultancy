import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Care2 Training Consultancy. All Rights Reserved.</p>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Email: info@care2consultancy.com | Phone: +123456789</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-blue-400">
            Facebook
          </a>
          <a href="#" className="text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="text-blue-400">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
