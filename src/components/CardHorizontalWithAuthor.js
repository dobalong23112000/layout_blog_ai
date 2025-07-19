"use client";

import Image from "next/image";
import Link from "next/link";

export default function CardHorizontalWithAuthor({
  image,
  title,
  description,
  publishDate,
  readTime,
  author,
  slug, // 👈 Thêm slug để dẫn link
}) {
  return (
    <div className="border-b border-gray-300 pb-4 mb-6">
      {/* Top: image + content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* image */}
        <div className="w-full md:w-1/3">
          <Link href={`/blog/${slug}`}>
            <Image
              src={image}
              alt={title}
              width={400}
              height={250}
              className="object-cover w-full h-full rounded-md hover:opacity-90 transition"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <Link href={`/blog/${slug}`}>
              <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition line-clamp-2 cursor-pointer">
                {title}
              </h3>
            </Link>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {publishDate} • {readTime}
          </div>
        </div>
      </div>

      {/* Author info */}
      {author?.avatar && (
        <div className="flex items-center mt-4 gap-2">
          <Image
            src={author.avatar}
            alt={author.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm text-gray-700 font-medium">
            by <span className="font-bold">{author.name}</span>
          </span>
        </div>
      )}
    </div>
  );
}
