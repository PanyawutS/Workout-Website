import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="ENERGYM Logo" className="h-14 w-14 mr-2" />
              <span className="text-xl font-bold">ENERGYM⚡️</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="btn btn-ghost hover:bg-gray-700 text-lg">หน้าหลัก</Link>
            <Link to="/courses" className="btn btn-ghost hover:bg-gray-700 text-lg">คอร์ส</Link>
            <Link to="/about" className="btn btn-ghost hover:bg-gray-700 text-lg">เกี่ยวกับเรา</Link>
            <Link to="/contact" className="btn btn-ghost hover:bg-gray-700 text-lg">ติดต่อเรา</Link>
            <Link to="/profile" className="btn btn-ghost hover:bg-gray-700 text-lg">โปรไฟล์</Link>
          </nav>

          {/* Authentication Buttons */}
          <div className="hidden md:flex">
            <Link to="/login" className="btn btn-outline border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-2 px-4 rounded">
              เข้าสู่ระบบ
            </Link>
            <Link to="/register" className="btn bg-white text-gray-800 font-semibold py-2 mx-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-200">
              สมัครสมาชิก
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center space-y-2 py-2">
              <Link to="/" className="btn btn-ghost hover:bg-gray-700 text-lg">หน้าหลัก</Link>
              <Link to="/courses" className="btn btn-ghost hover:bg-gray-700 text-lg">คอร์ส</Link>
              <Link to="/about" className="btn btn-ghost hover:bg-gray-700 text-lg">เกี่ยวกับเรา</Link>
              <Link to="/contact" className="btn btn-ghost hover:bg-gray-700 text-lg">ติดต่อเรา</Link>
              <Link to="/profile" className="btn btn-ghost hover:bg-gray-700 text-lg">โปรไฟล์</Link>
              <Link to="/login" className="btn btn-outline border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-2 px-4 rounded">
                เข้าสู่ระบบ
              </Link>
              <Link to="/register" className="btn bg-white text-gray-800 font-semibold py-2 mx-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-200">
                สมัครสมาชิก
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
