import React from 'react'
import NotFoundPng from "@/assets/image/not-found.png"
import Image from 'next/image'
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center text-2xl font-bold text-red-500">
      <div className='flex flex-col items-center gap-5'>
        <Image width={300} height={300} src={NotFoundPng} alt="Not Found" />
        <Link href="/" className="btn btn-sm ">Go Home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage