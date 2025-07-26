
import { format } from "date-fns";
import Image from "next/image";
export default function CardHorizontalWithImage({ image, tags, title, description, published_at, readTime, image_alt }) {
  return (
    <div className="flex gap-4 pb-4">
      <Image priority src={image} alt={image_alt} width={800} height={600} className="w-38 h-38 rounded-md object-cover" placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAABQAQCdASoIAAUADMDOJQAAJwEAAPc1cCYytxXdWwAAAA=="/>
      <div className="flex flex-col">
        <span className="text-[11px] bg-blue-100 uppercase font-medium text-primary bg-blue-50 px-2 py-1 rounded-full w-fit">
          {tags[0] ?? 'Empty'}
        </span>
        <h3 className="text-lg font-bold text-gray-800 hover:text-primary cursor-pointer">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <span className="text-sm text-gray-400 mt-3">{format(new Date(published_at ?? null), "dd/MM/yyyy")} •{" "}
            {readTime ?? "4 min read"}</span>
      </div>
    </div>
  );
}
