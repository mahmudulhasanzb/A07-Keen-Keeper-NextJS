import Link from 'next/link';
import React from 'react';
import MyNavLinks from './MyNavLinks';
import { IoHomeOutline, IoTimeOutline } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';

const NavbarPage = () => {
  const navLinks = [
    {
      path: '/',
      text: (
        <>
          <IoHomeOutline className="text-2xl items-center justify-center text-center flex" />{' '}
          Home
        </>
      ),
    },
    {
      path: '/timeline',
      text: (
        <>
          <IoTimeOutline className="text-2xl items-center justify-center text-center flex" />{' '}
          Timeline
        </>
      ),
    },
    {
      path: '/stats',
      text: (
        <>
          <GoGraph className="text-2xl items-center justify-center text-center flex" />{' '}
          Stats
        </>
      ),
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-10 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black"
          >
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
            {navLinks.map((navlink, index) => (
              <MyNavLinks key={index} href={navlink.path}>
                {navlink.text}
              </MyNavLinks>
            ))}
          </ul>
        </div>
        <Link href="/" className=" text-2xl font-bold text-black">
          Keen<span className="text-[#244D3F] font-semibold">Keeper</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          {navLinks.map((navLink, index) => (
            <MyNavLinks key={index} href={navLink.path}>
              {navLink.text}
            </MyNavLinks>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarPage;
