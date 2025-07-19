import Image from "next/image";

export default function CardWithImage({ image, tag, title, description, date }) {
  return (
    <div className="flex gap-4 border-b border-gray-300 pb-4">
      <Image
        src={image}
        alt={title}
        width={800}
        height={600}
        className="w-24 h-24 rounded-md object-cover"
        priority
      />
      <div className="flex flex-col justify-between">
        <span className="text-[11px] bg-blue-100 uppercase font-medium text-primary bg-blue-50 px-2 py-1 rounded-full w-fit">
          {tag}
        </span>
        <h3 className="text-sm font-bold text-gray-800 hover:text-primary cursor-pointer">{title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </div>
  );
}
