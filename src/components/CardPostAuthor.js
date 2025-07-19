
import Image from 'next/image';
export default function CardPostAuthor({
  author,
  title,
  description,
  publishDate,
  readTime,
}) {
  return (
    <div className="shadow shadow-md overflow-hidden bg-white flex flex-col transition hover:shadow-md rounded-md">
      {/* Author Header */}
      <div className="flex items-center gap-3 bg-primary px-4 py-3">
        <Image
          src={author.avatar}
          alt={author.name}
          width={800}
          height={600}
          className="w-15 h-15 object-cover rounded-full"
          priority
        />
        <span className="text-sm font-medium text-gray-700 text-white">{author.name}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-4 py-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition cursor-pointer">
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
