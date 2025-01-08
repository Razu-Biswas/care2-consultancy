import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-blue-600">
            <img
              className="h-12 w-16"
              src="https://care2training.com/wp-content/uploads/2024/02/Logo-For-Care2-Training-1.png"
              alt=""
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 font-bold hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 font-bold hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-700 font-bold hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 font-bold hover:text-blue-600"
            >
              Contact
            </a>
            <button class="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
              Free Consulation
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button class="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
              Free Consulation
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
