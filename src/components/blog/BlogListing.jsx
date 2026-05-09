'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { clientApi } from '@/_utils/clientApi';

export default function BlogListing({ posts: initialPosts = [], categories = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

  // Fetch posts when category changes
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        // Build the endpoint with category parameter if selected
        const endpoint = selectedCategory
          ? `blog-posts?category=${encodeURIComponent(selectedCategory)}`
          : 'blog-posts';

        const response = await clientApi(endpoint);

        if (response.status) {
          setPosts(Array.isArray(response.result) ? response.result : []);
        } else {
          setPosts([]);
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  // Scroll active tab into center view
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeTab = activeTabRef.current;

      const containerWidth = container.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;

      const scrollPosition = tabLeft - containerWidth / 2 + tabWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [selectedCategory]);

  return (
    <section className="w-full bg-white lg:py-[80px] py-[64px] px-[16px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Category Filter - Gallery Style Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center lg:mb-[52px] mb-[30px]"
          id="categories"
        >
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto scroll-smooth
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                       bg-white rounded-[8px] border border-[#0000001A] p-[5px] gap-[4px]
                       max-w-full"
            role="tablist"
          >
            {/* All Posts Tab */}
            <button
              ref={selectedCategory === '' ? activeTabRef : null}
              type="button"
              role="tab"
              aria-selected={selectedCategory === ''}
              onClick={() => setSelectedCategory('')}
              disabled={loading}
              className={[
                'excon-font relative text-[14px] sm:text-[18px] font-medium rounded-[8px]',
                'px-[16px] lg:px-[22px] py-[10px] lg:py-[14px]',
                'whitespace-nowrap cursor-pointer transition-colors duration shrink-0',
                selectedCategory === '' ? 'text-white' : 'bg-white text-[#0f172a] hover:text-[#009FFF]',
                loading ? 'opacity-90 cursor-not-allowed' : '',
              ].join(' ')}
            >
              {/* Animated active background pill */}
              {selectedCategory === '' && (
                <motion.span
                  layoutId="activeBlogTabPill"
                  className="absolute inset-0 bg-[#009FFF] rounded-[10px] z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                />
              )}
              <span className="relative z-10">All Posts</span>
            </button>

            {/* Category Tabs */}
            {categories.map((category) => (
              <button
                key={category}
                ref={selectedCategory === category ? activeTabRef : null}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                disabled={loading}
                className={[
                  'excon-font relative text-[14px] sm:text-[18px] font-medium rounded-[8px]',
                  'px-[16px] lg:px-[22px] py-[10px] lg:py-[14px]',
                  'whitespace-nowrap cursor-pointer transition-colors duration shrink-0',
                  selectedCategory === category ? 'text-white' : 'bg-white text-[#0f172a] hover:text-[#009FFF]',
                  loading ? 'opacity-90 cursor-not-allowed' : '',
                ].join(' ')}
              >
                {/* Animated active background pill */}
                {selectedCategory === category && (
                  <motion.span
                    layoutId="activeBlogTabPill"
                    className="absolute inset-0 bg-[#009FFF] rounded-[10px] z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Loading State - Skeleton Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px]">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col animate-pulse">
                {/* Skeleton Image */}
                <div className="relative w-full h-48 sm:h-56 bg-gray-200"></div>

                {/* Skeleton Content */}
                <div className="p-5 sm:p-6 flex flex-col grow">
                  {/* Skeleton Category Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  </div>

                  {/* Skeleton Title */}
                  <div className="space-y-2 mb-3">
                    <div className="h-6 bg-gray-200 rounded w-full"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  </div>

                  {/* Skeleton Excerpt */}
                  <div className="space-y-2 mb-4 grow">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>

                  {/* Skeleton Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <div className="h-3 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  {/* Skeleton Read More Link */}
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px]">
            {posts.map((post, index) => (
              <motion.article
                key={post._id || post.id || post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#0000001A] lg:p-[24px] p-[18px] rounded-[24px] overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Post Image */}
                {post.featuredImage && (
                  <div className="relative w-full h-[220px] sm:h-[220px] overflow-hidden mb-[14px]">
                    <Image
                      src={`${process.env.DYNAMIC_IMG_BASE_PATH}${post.featuredImage}`}
                      alt={post.title || 'Blog post image'}
                      fill
                      className="object-cover rounded-[10px] hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex flex-col grow">
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                    {(post.publishedAt || post.createdAt) && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    )}
                    {post.readTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    )}
                  </div>

                  {/* Post Title */}
                  <h3 className="font-excon text-[20px] sm:text-[24px] font-bold text-dark mb-[14px] line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  {post.excerpt && (
                    <p className="font-ranade text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 grow">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#0CA4EB] font-ranade font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="font-ranade text-lg text-gray-600">
              No articles found in this category. Check back soon for new content!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
