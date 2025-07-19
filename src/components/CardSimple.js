
export default function CardSimple({ title, date }) {
  return (
    <div className="border-b border-gray-300 pb-2">
      <h4 className="text-sm text-white font-bold hover:underline cursor-pointer">
        {title}
      </h4>
      <p className="text-xs text-white">{date}</p>
    </div>
  );
}
