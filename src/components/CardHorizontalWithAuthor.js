import Image from "next/image";
import Link from "next/link";

export default function CardHorizontalWithAuthor({
  image,
  title,
  description,
  publishDate,
  readTime,
  author,
  slug,
}) {
  return (
    <div className="border-b border-gray-200 pb-6 mb-8">
      <Link href={`/blog/${slug}`} className="group flex flex-col md:flex-row gap-4">
        {/* Image */}
        <div className="w-full md:w-1/3 shrink-0">
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="rounded-md w-full h-full object-cover transition group-hover:opacity-90"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {publishDate} • {readTime}
          </div>
        </div>
      </Link>

      {/* Author */}
      {author?.avatar && (
        <div className="flex items-center mt-4 gap-2">
          <Image
            src={author.avatar}
            alt={author.name}
            width={800}
            height={600}
            className="w-8 h-8 object-cover rounded-full"
            priority
          />
          <span className="text-sm text-gray-700">
            by <span className="font-bold">{author.name}</span>
          </span>
        </div>
      )}
    </div>
  );
}
