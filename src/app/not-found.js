'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, BookOpen, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-[16px]"
      style={{
        backgroundImage: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto pt-[220px] pb-[140px]">
        <div className="flex flex-col items-center text-center">
          {/* 404 Number with animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-bold leading-none tracking-tight">
              <span className="bg-gradient-to-br from-cyan via-blue to-cyan bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mb-6 max-w-3xl"
          >
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed mb-2">
              The page you're looking for seems to have wandered off into the cloud.
            </p>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Don't worry, even the best navigators get lost sometimes. Let's get you back on track.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
          >
            <Link
              href="/"
              className="btn-primary cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide w-full sm:w-auto min-w-[200px] hover:scale-105 transition-transform"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex  cursor-pointer items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide w-full sm:w-auto min-w-[200px] border-2 border-white/30 text-white rounded hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="w-full max-w-4xl"
          >
            <p className="text-white/70 text-sm mb-6">Or explore these popular pages:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/#course"
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-cyan/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-cyan/20 rounded-lg group-hover:bg-cyan/30 transition-colors">
                <BookOpen size={24} className="text-cyan" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-cyan transition-colors">
                  Our Courses
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  Explore Salesforce training programs
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/#placement"
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-cyan/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue/20 rounded-lg group-hover:bg-blue/30 transition-colors">
                <Search size={24} className="text-blue" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-cyan transition-colors">
                  Placements
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  View our placement success stories
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-cyan/50 transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-cyan/20 rounded-lg group-hover:bg-cyan/30 transition-colors">
                <Phone size={24} className="text-cyan" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-cyan transition-colors">
                  Contact Us
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  Get in touch with our team
                </p>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
        className="mt-12 pt-8 border-t border-white/10"
      >
        <p className="text-white/50 text-xs sm:text-sm">
          Need assistance? Call us at{' '}
          <a href="tel:+919284461693" className="text-cyan hover:text-white transition-colors font-semibold">
            +91 9284461693
          </a>
          {' '}or email{' '}
          <a href="mailto:info@cloudintellect.in" className="text-cyan hover:text-white transition-colors font-semibold">
            info@cloudintellect.in
          </a>
        </p>
      </motion.div> */}
        </div>
      </div >
    </section >
  );
}
