import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
export default function CardHorizontalWithAuthor({
  image,
  title,
  description,
  readTime,
  authors,
  slug,
  published_at,
  tags,
  image_alt
}) {
  return (
    <div className="border-b border-gray-200 pb-6 mb-8">
      <Link
        href={`/blog/${slug}`}
        className="group flex flex-col md:flex-row gap-4"
      >
        {/* Image */}
        <div className="w-full md:w-1/3 shrink-0">
          <Image
            src={image}
            alt={image_alt}
            width={800}
            height={800}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAABQAQCdASoIAAUADMDOJQAAJwEAAPc1cCYytxXdWwAAAA=="
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
            
              <span className="text-[11px] bg-blue-100 uppercase font-medium text-primary bg-blue-50 px-2 py-1 rounded-full w-fit">
                {tags[0] ?? "No tag"}
              </span>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {format(new Date(published_at ?? null), "dd/MM/yyyy")} •{" "}
            {readTime ?? "4 min read"}
          </div>
        </div>
      </Link>

      {/* Author */}
      {authors?.avatar_url && (
        <div className="flex items-center mt-4 gap-2">
          <Image
            src={authors.avatar_url}
            alt={authors.name}
            width={800}
            height={800}
            className="w-8 h-8 object-cover rounded-full"
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAABQAQCdASoIAAUADMDOJQAAJwEAAPc1cCYytxXdWwAAAA=="
          />
          <span className="text-sm text-gray-700">
            by <span className="font-bold">{authors.name}</span>
          </span>
        </div>
      )}
    </div>
  );
}
