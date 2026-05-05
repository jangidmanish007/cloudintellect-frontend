'use client';

import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryModal = ({ isOpen, onClose, images, currentIndex, onNavigate }) => {
  const currentImage = images?.[currentIndex];

  const handlePrevious = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
    },
    [currentIndex, onNavigate],
  );

  const handleNext = React.useCallback(
    (e) => {
      e.stopPropagation();
      if (images && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    },
    [currentIndex, images, onNavigate],
  );

  const handleKeyDown = React.useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious(e);
      } else if (e.key === 'ArrowRight') {
        handleNext(e);
      } else if (e.key === 'Escape') {
        onClose();
      }
    },
    [handlePrevious, handleNext, onClose],
  );

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!images || images.length === 0 || !currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        showCloseButton={false}
        className="!max-w-[95vw] !w-[60vw] max-h-[95vh] h-[95vh] p-0 bg-white backdrop-blur-xl border-none sm:!max-w-[95vw] sm:!w-[95vw] md:!max-w-[95vw] md:!w-[95vw] lg:!max-w-[70vw] lg:!w-[95vw]"
      >
        <VisuallyHidden>
          <DialogTitle>{currentImage.title || `Gallery Image ${currentIndex + 1} of ${images.length}`}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 z-50 p-2 rounded-full bg-gray-900/80 hover:bg-gray-900 transition-colors backdrop-blur-sm"
            aria-label="Close gallery"
          >
            <X className="w-[20px] h-[20px] text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm">
            <span className="text-white text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="cursor-pointer absolute left-4 z-50 p-2 rounded-full bg-gray-900/80 hover:bg-gray-900 transition-all backdrop-blur-sm hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-[20px] h-[20px] text-white" />
            </button>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
            <div className="relative max-h-[86vh]">
              <img
                src={`${process.env.DYNAMIC_IMG_BASE_PATH}${currentImage.image}`}
                alt={currentImage.title || 'Gallery image'}
                className="object-contain rounded-sm max-h-[86vh]"
              />
            </div>
          </div>

          {/* Next Button */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={handleNext}
              className="cursor-pointer absolute right-4 z-50 p-2 rounded-full bg-gray-900/80 hover:bg-gray-900 transition-all backdrop-blur-sm hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-[24px] h-[24px] text-white" />
            </button>
          )}

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-[80vw] overflow-x-auto">
            <div className="flex gap-2 px-4 py-2 backdrop-blur-sm rounded-full">
              {images
                .slice(Math.max(0, currentIndex - 3), Math.min(images.length, currentIndex + 4))
                .map((img, idx) => {
                  const actualIndex = Math.max(0, currentIndex - 3) + idx;
                  return (
                    <button
                      key={img._id}
                      onClick={() => onNavigate(actualIndex)}
                      className={`cursor-pointer relative w-[36px] h-[36px] rounded-sm overflow-hidden transition-all ${
                        actualIndex === currentIndex ? 'ring-2 ring-[#0CA4EB]' : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={`${process.env.DYNAMIC_IMG_BASE_PATH}${img.image}`}
                        alt={img.title || 'Thumbnail'}
                        fill
                        className="object-cover"
                      />
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

GalleryModal.displayName = 'GalleryModal';

export default GalleryModal;
