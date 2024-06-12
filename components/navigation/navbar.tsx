import React from "react";
import Link from "next/link";


export const Navbar = () => {
  return (
  <nav className="w-full h-20 bg-emerald-800 sticky top-0 sm:p-4 md:justify-between md:items-center">
    <div className="container mx-auto px-4 h-full">
      <div className="flex justify-between items-center h-full">
        <a href="" className = "text-2xl font-bold text-white">
          Networth Navigator
        </a>
        <ul className="hidden md:flex gap-x-6 text-white ">
        <li>
            <Link href="/" className ="mx-2 hover:text-gray-300">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className ="mx-2 hover:text-gray-300">
              <p>Portfolio</p>
            </Link>
          </li>
          <li>
            <Link href="/get-started " className ="mx-2 hover:text-gray-300">
              <p>Get Started</p>
            </Link>
          </li>
          <li>
            <Link href="/about" className ="mx-2 hover:text-gray-300">
              <p>About</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Navbar;