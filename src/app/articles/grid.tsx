import React from 'react'

export default function GridLayout (){
  return (
    <div>
      <main className="bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12 animate-pulse">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="h-10 w-1/3 bg-gray-800 rounded-md" />
            <div className="h-[441px] w-[776px] max-w-full bg-gray-800 rounded-2xl" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded-md w-5/6" />
              <div className="h-4 bg-gray-800 rounded-md w-2/3" />
              <div className="h-4 bg-gray-800 rounded-md w-4/5" />
            </div>
          </div>

          {/* Right column */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-gray-900/40 border border-gray-800 rounded-3xl p-8">
              <div className="h-6 w-2/3 bg-gray-800 rounded-md mb-4" />
              <div className="h-4 bg-gray-800 rounded-md mb-3" />
              <div className="h-4 bg-gray-800 rounded-md mb-3" />
              <div className="h-10 w-full bg-gray-800 rounded-lg mt-6" />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

