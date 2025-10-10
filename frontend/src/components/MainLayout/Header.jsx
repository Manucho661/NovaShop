import { useState } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#002B5B] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          Nova<span className="text-[#ec5b53]">Shop</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <form className="flex w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-grow px-4 py-2 text-gray-800 rounded-l-md outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-[#ec5b53] hover:bg-[#f36b63] px-4 rounded-r-md flex items-center justify-center"
            >
              <FaSearch size={18} />
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-[#ec5b53] transition">
            <FaHeart size={18} />
          </a>
          <a href="#" className="hover:text-[#ec5b53] transition relative">
            <FaShoppingCart size={18} />
            <span className="absolute -top-2 -right-2 bg-[#ec5b53] text-xs font-semibold text-white rounded-full px-1.5">
              2
            </span>
          </a>
          <a href="#" className="hover:text-[#ec5b53] transition">
            <FaUser size={18} />
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-6 pb-3">
        <form className="flex">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow px-3 py-2 text-gray-800 rounded-l-md outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            className="bg-[#ec5b53] px-3 rounded-r-md flex items-center justify-center"
          >
            <FaSearch size={16} />
          </button>
        </form>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:justify-center bg-[#001E3A] text-sm`}
      >
        <ul className="flex flex-col md:flex-row items-center md:space-x-8 px-6 md:px-0 py-3 md:py-2">
          <li><a href="#" className="hover:text-[#ec5b53] transition py-1 block">Home</a></li>
          <li><a href="#" className="hover:text-[#ec5b53] transition py-1 block">Shop</a></li>
          <li><a href="#" className="hover:text-[#ec5b53] transition py-1 block">Deals</a></li>
          <li><a href="#" className="hover:text-[#ec5b53] transition py-1 block">Categories</a></li>
          <li><a href="#" className="hover:text-[#ec5b53] transition py-1 block">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
