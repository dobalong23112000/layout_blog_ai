export default function CardWithImage({ image, tag, title, description, date }) {
  return (
    <div className="flex gap-4 border-b border-gray-300 pb-4">
      <img src={image} alt={title} className="w-24 h-24 rounded-md object-cover" />
      <div className="flex flex-col justify-between">
        <span className="text-xs uppercase text-blue-600 font-semibold">{tag}</span>
        <h3 className="text-sm font-bold text-gray-800 hover:underline cursor-pointer">{title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </div>
  );
}
