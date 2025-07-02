"use client";


import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="px-6 py-3 bg-primary text-black rounded-md hover:bg-primary-dark transition-all">
          Go Back Home
      </Link>
    </div>
  );
}
