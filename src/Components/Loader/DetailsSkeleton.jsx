import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] pb-20 animate-pulse">
      {/* Back Button Placeholder */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="h-4 w-32 bg-gray-200 dark:bg-zinc-800 rounded" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        
        {/* Left: Media Gallery Skeleton */}
        <div className="space-y-6">
          <div className="aspect-[16/10] rounded-3xl bg-gray-200 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800" />
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-24 h-20 rounded-xl bg-gray-200 dark:bg-zinc-800 flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Right: Info Stack Skeleton */}
        <div className="flex flex-col space-y-6">
          <div>
            <div className="h-6 w-40 bg-gray-200 dark:bg-zinc-800 rounded-full mb-4" />
            <div className="h-12 w-full bg-gray-200 dark:bg-zinc-800 rounded-xl mb-4" />
            <div className="h-6 w-1/2 bg-gray-200 dark:bg-zinc-800 rounded" />
          </div>

          <div className="py-4">
            <div className="h-10 w-32 bg-gray-200 dark:bg-zinc-800 rounded mb-2" />
            <div className="h-4 w-48 bg-gray-200 dark:bg-zinc-800 rounded" />
          </div>

          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded" />
            <div className="h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-zinc-800 rounded" />
          </div>

          {/* Feature Grid Skeleton */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gray-200 dark:bg-zinc-900/50 rounded-2xl" />
            <div className="h-20 bg-gray-200 dark:bg-zinc-900/50 rounded-2xl" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <div className="flex-1 h-14 bg-gray-200 dark:bg-zinc-800 rounded-2xl" />
            <div className="flex-1 h-14 bg-gray-200 dark:bg-zinc-800 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;