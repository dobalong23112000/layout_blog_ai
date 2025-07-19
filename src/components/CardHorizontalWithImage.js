export default function CardHorizontalWithImage({ image, tag, title, description, date }) {
  return (
    <div className="flex gap-4 pb-4">
      <img src={image} alt={title} className="w-full h-38 rounded-md object-cover" />
      <div className="flex flex-col">
        <span className="text-xs uppercase text-blue-600 font-semibold">{tag}</span>
        <h3 className="text-lg font-bold text-gray-800 hover:underline cursor-pointer">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
    </div>
  );
}
