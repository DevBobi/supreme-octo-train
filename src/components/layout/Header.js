import { Link } from 'gatsby';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="scroll top-0 pt-4 bg-oxford-blue">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <Link to='/' className="w-12 mr-3 text-white text-1xl">
          Reaktor
        </Link>
      </div>
      <div className="flex items-center text-2xl">
        <Link to='/' className=" ml-5 pl-5 text-white text-4xl font-medium">
          R
        </Link>
      </div>
      <div className="flex mt-4 sm:mt-0 text-1xl font-medium">
        <AnchorLink className="px-4 text-white" href="#features">
          Work
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#services">
          About
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#stats">
          Career
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#testimonials">
          Responsibility
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#testimonials">
          Podcast
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
