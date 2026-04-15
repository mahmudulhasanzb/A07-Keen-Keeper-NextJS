"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyNavLinks = ({ href, children }) => {
  const pathname = usePathname()
  console.log("pathname", pathname);
  console.log("href",href);
  return <Link href={href} className={`btn btn-ghost ${pathname == href ? "bg-[#244D3F] text-white" : ""}`}>{children}</Link>;
};

export default MyNavLinks;
