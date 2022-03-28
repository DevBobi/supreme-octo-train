import { Link } from 'gatsby';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="w-full bg-oxford-blue text-gray-500 body-font py-10 px-10 shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* Site logo and Name */}
        <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
          <span className="ml-3 text-2xl text-gray-100 font-semibold antialiased">Reaktor</span>
        </a>

        {/* Navbar */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center tracking-wide text-xl font-medium">
          <Link to="/link" className="mr-8 md:hidden lg:block text-4xl font-medium pr-40 text-gray-100 hover:text-gray-500">R</Link>
          <Link to="/link" className="mr-8 text-gray-100 hover:text-gray-500">Work</Link>
          <Link to="/link" className="mr-8 text-gray-100 hover:text-gray-500">About</Link>
          <Link href="#link" className="mr-8 text-gray-100 hover:text-gray-500">Career</Link>
          <Link href="#link" className="mr-8 text-gray-100 hover:text-gray-500">Responsibility</Link>
          <Link href="#link" className="mr-8 text-gray-100 hover:text-gray-500">Podcast</Link>
        </nav>

        {/* Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Work</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">About</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Career</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Responsibility</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Podcast</a>
        </div>
      }


    </header>
  );
}

export default Header;
