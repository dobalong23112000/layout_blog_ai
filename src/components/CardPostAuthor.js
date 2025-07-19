import React from 'react';

export default function CardPostAuthor({
  author,
  title,
  description,
  publishDate,
  readTime,
}) {
  return (
    <div className="border shadow-sm overflow-hidden bg-white flex flex-col transition hover:shadow-md">
      {/* Author Header */}
      <div className="flex items-center gap-3 bg-black px-4 py-3">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-15 h-15  object-cover"
        />
        <span className="text-sm font-medium text-gray-700 text-white">{author.name}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-4 py-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition cursor-pointer">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Meta */}
        <div className="flex justify-between text-xs text-gray-500">
          <span>{publishDate}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
