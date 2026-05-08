import React from 'react';
import Image from 'next/image';

export default function BlogPostContent({ blogPost }) {
  if (!blogPost) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-gray-600 font-ranade">No content available.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <article className="max-w-[900px] mx-auto">
          {/* Featured Image */}
          {blogPost.featuredImage && (
            <div className="mb-10 sm:mb-14 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50 transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.01]">
              <Image
                src={`${process.env.DYNAMIC_IMG_BASE_PATH}${blogPost.featuredImage}`}
                alt={blogPost.title || 'Blog post image'}
                width={900}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Excerpt */}
          {blogPost.excerpt && (
            <div className="mb-10 sm:mb-12 pb-8 sm:pb-10 border-b-2 border-gray-200">
              <div className="relative pl-6 border-l-4 border-[#0CA4EB]">
                <p className="font-ranade text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                  {blogPost.excerpt}
                </p>
              </div>
            </div>
          )}

          {/* Blog Content */}
          {blogPost.content && (
            <div
              className="prose prose-lg max-w-none
                /* Headings */
                prose-headings:font-excon prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-h1:text-3xl sm:prose-h1:text-4xl lg:prose-h1:text-5xl prose-h1:mb-6 prose-h1:mt-10
                prose-h2:text-2xl sm:prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mb-5 prose-h2:mt-8 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200
                prose-h3:text-xl sm:prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mb-4 prose-h3:mt-6
                prose-h4:text-lg sm:prose-h4:text-xl lg:prose-h4:text-2xl prose-h4:mb-3 prose-h4:mt-5
                prose-h5:text-base sm:prose-h5:text-lg lg:prose-h5:text-xl prose-h5:mb-3 prose-h5:mt-4
                prose-h6:text-sm sm:prose-h6:text-base lg:prose-h6:text-lg prose-h6:mb-2 prose-h6:mt-4
                
                /* Paragraphs */
                prose-p:font-ranade prose-p:text-base sm:prose-p:text-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                
                /* Links */
                prose-a:text-[#0CA4EB] prose-a:font-medium prose-a:no-underline prose-a:transition-all prose-a:duration-200
                hover:prose-a:text-[#0891d1] hover:prose-a:underline hover:prose-a:underline-offset-4
                
                /* Lists */
                prose-ul:my-6 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:space-y-2 prose-ol:list-decimal prose-ol:pl-6
                prose-li:font-ranade prose-li:text-base sm:prose-li:text-lg prose-li:text-gray-700 prose-li:leading-relaxed
                prose-li:marker:text-[#0CA4EB]
                
                /* Blockquotes */
                prose-blockquote:border-l-4 prose-blockquote:border-[#0CA4EB] prose-blockquote:pl-6 prose-blockquote:py-2
                prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50
                prose-blockquote:rounded-r-lg prose-blockquote:shadow-sm
                
                /* Code */
                prose-code:font-mono prose-code:text-sm prose-code:bg-gray-100 prose-code:text-[#0891d1] 
                prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-lg
                prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto prose-pre:border prose-pre:border-gray-700
                
                /* Images */
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full prose-img:h-auto
                prose-img:ring-1 prose-img:ring-gray-200/50
                
                /* Tables */
                prose-table:w-full prose-table:my-8 prose-table:border-collapse prose-table:shadow-lg prose-table:rounded-lg prose-table:overflow-hidden
                prose-thead:bg-[#0CA4EB] prose-thead:text-white
                prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-sm sm:prose-th:text-base
                prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-gray-200 prose-td:text-gray-700
                prose-tr:transition-colors hover:prose-tr:bg-gray-50
                
                /* Strong and Em */
                prose-strong:font-bold prose-strong:text-gray-900
                prose-em:italic prose-em:text-gray-700
                
                /* HR */
                prose-hr:my-10 prose-hr:border-t-2 prose-hr:border-gray-200
                
                /* Figure */
                prose-figure:my-8
                prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-600 prose-figcaption:mt-3 prose-figcaption:italic
              "
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          )}

          {/* Tags Section */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-ranade text-sm font-semibold text-gray-600">Tags:</span>
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-full px-4 py-1.5 text-gray-700 text-sm font-medium cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Category Tag */}
          {blogPost.category && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="font-ranade text-sm font-semibold text-gray-600">Category:</span>
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0CA4EB]/10 to-[#0891d1]/10 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <span className="w-2.5 h-2.5 bg-[#0CA4EB] rounded-full animate-pulse" />
                  <span className="text-[#0CA4EB] text-sm font-semibold group-hover:text-[#0891d1] transition-colors duration-200">
                    {blogPost.category}
                  </span>
                </span>
              </div>
            </div>
          )}

          {/* Author & Date Info */}
          {(blogPost.author || blogPost.publishedDate) && (
            <div className="mt-10 pt-8 border-t-2 border-gray-200">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                {blogPost.author && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0CA4EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="font-ranade font-medium text-gray-700">
                      By <span className="text-[#0CA4EB] font-semibold">{blogPost.author}</span>
                    </span>
                  </div>
                )}
                {blogPost.publishedDate && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0CA4EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-ranade font-medium text-gray-700">{blogPost.publishedDate}</span>
                  </div>
                )}
                {blogPost.readTime && (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0CA4EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-ranade font-medium text-gray-700">{blogPost.readTime} min read</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <h3 className="font-excon text-lg font-bold text-gray-900">Share this article</h3>
              <div className="flex items-center gap-3">
                {/* Twitter */}
                <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1DA1F2] transition-all duration-200 shadow-sm hover:shadow-md">
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </button>
                {/* Facebook */}
                <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1877F2] transition-all duration-200 shadow-sm hover:shadow-md">
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                {/* LinkedIn */}
                <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0A66C2] transition-all duration-200 shadow-sm hover:shadow-md">
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                {/* Copy Link */}
                <button className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-[#0CA4EB] transition-all duration-200 shadow-sm hover:shadow-md">
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
