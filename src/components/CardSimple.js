export default function CardSimple({ title, date }) {
  return (
    <div className="border-b border-gray-300 pb-2">
      <h4 className="text-sm font-bold text-gray-800 hover:underline cursor-pointer">
        {title}
      </h4>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}
