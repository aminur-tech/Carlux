import React from "react";

const SkeletonCard = () => {
  return (
    <div className="group relative h-full flex flex-col rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm animate-pulse">
      
      {/* Image Carousel Placeholder */}
      <div className="relative h-48 w-full bg-gray-200 dark:bg-zinc-800 flex-shrink-0">
        {/* Navigation Dot Placeholders */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-zinc-700" />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <div className="flex-1 space-y-2">
            {/* Brand Placeholder */}
            <div className="h-3 w-1/4 bg-gray-200 dark:bg-zinc-800 rounded" />
            {/* Title Placeholder */}
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-zinc-800 rounded" />
          </div>
          {/* Rating Badge Placeholder */}
          <div className="h-6 w-12 bg-gray-200 dark:bg-zinc-800 rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col grow justify-end space-y-3">
          <div className="space-y-2">
            {/* Price Placeholder */}
            <div className="h-8 w-1/2 bg-gray-200 dark:bg-zinc-800 rounded" />
            {/* Stock Placeholder */}
            <div className="h-3 w-1/3 bg-gray-200 dark:bg-zinc-800 rounded" />
          </div>

          {/* Button Placeholder */}
          <div className="h-12 w-full bg-gray-200 dark:bg-zinc-800 rounded-xl mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;