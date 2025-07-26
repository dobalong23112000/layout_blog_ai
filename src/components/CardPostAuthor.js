
import Image from 'next/image';
import { format } from 'date-fns';
export default function CardPostAuthor({
  authors,
  title,
  description,
  readTime,
  published_at,
}) {
  return (
    <div className="shadow shadow-md overflow-hidden bg-white flex flex-col transition hover:shadow-md rounded-md">
      {/* Author Header */}
      <div className="flex items-center gap-3 bg-primary px-4 py-3">
        {authors?.avatar_url && 
        (<Image
          src={authors.avatar_url}
          alt={authors.name}
          width={800}
          height={800}
          className="w-15 h-15 object-cover rounded-full"
          priority
          placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAABQAQCdASoIAAUADMDOJQAAJwEAAPc1cCYytxXdWwAAAA=="
        />)}
        
        <span className="text-sm font-medium text-gray-700 text-white">{authors?.name}</span>
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
          <span>{format(new Date(published_at ?? null), 'dd/MM/yyyy') }</span>
          <span>{readTime ?? '4 min read'}</span>
        </div>
      </div>
    </div>
  );
}
