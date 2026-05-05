'use client';

import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const GallerySkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl">
          <Skeleton className="w-full aspect-4/3 rounded-2xl" />
        </div>
      ))}
    </div>
  );
};

GallerySkeleton.displayName = 'GallerySkeleton';

export default GallerySkeleton;
