import Link from 'next/link';
import React from 'react';

const NavbarPage = () => {
  const MyNavLinks = (
    <>
      <Link href="/">Home</Link>
      <Link href="/timeline">Timeline</Link>
      <Link href="/stats">Stats</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
          >
            {MyNavLinks}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <span>Keen</span>
          <span className="text-green-500">Keeper</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{MyNavLinks}</ul>
      </div>
    </div>
  );
};

export default NavbarPage;
