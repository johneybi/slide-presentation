import React from 'react';

export default function SlideLayout({ caption, header, subcopy, children, isCover = false }) {
  if (isCover) {
    return (
      <div className="w-full h-full p-24 flex flex-col justify-center items-center text-center bg-canvas">
        <h2 className="text-caption text-sm font-bold mb-6 uppercase tracking-wider">{caption}</h2>
        <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-8">
          {header}
        </h1>
        <p className="text-secondary text-lg font-medium max-w-5xl leading-relaxed">
          {subcopy}
        </p>
        <div className="flex-1 mt-16 w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-24 flex flex-col bg-canvas">
      {/* Top Section */}
      <div className="mb-12 flex-shrink-0">
        <h2 className="text-caption text-sm font-bold mb-4 uppercase tracking-wider">{caption}</h2>
        <h1 className="text-primary text-4xl font-extrabold leading-tight tracking-tight mb-6">
          {header}
        </h1>
        {subcopy && (
          <p className="text-secondary text-lg font-medium leading-relaxed max-w-4xl">
            {subcopy}
          </p>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full flex relative">
        {children}
      </div>
    </div>
  );
}
