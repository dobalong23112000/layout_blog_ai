import Image from "next/image";

export const components = {
  h1: (props) => (
    <h1
      className="text-4xl font-bold mt-10 mb-6 text-gray-800 leading-tight tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-semibold mt-8 mb-4 text-primary-700 border-gray-200 pb-1"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700" {...props} />
  ),
  p: ({ node, children }) => {
    // Check if the only child is an image
    const isImageOnly =
      node.children &&
      node.children.length === 1 &&
      node.children[0].tagName === "img";

    if (isImageOnly) return <>{children}</>; // don’t wrap in <p>
    return <p>{children}</p>;
  },
  img: ({ alt, src }) => (
    <figure className="my-6">
      <Image
        alt={alt}
        src={src}
        width={800}
        height={0}
        style={{ height: "auto" }}
        className="rounded-md shadow-md object-cover"
      />
      {alt && (
        <figcaption className="text-sm text-gray-500 text-center mt-2 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse text-sm text-gray-700"
        {...props}
      />
    </div>
  ),
  thead: (props) => (
    <thead
      className="bg-gray-100 border-b border-gray-300 text-left"
      {...props}
    />
  ),
  tbody: (props) => <tbody {...props} />,
  tr: (props) => (
    <tr
      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
      {...props}
    />
  ),
  th: (props) => (
    <th className="px-4 py-2 font-semibold text-gray-800" {...props} />
  ),
  td: (props) => <td className="px-4 py-2 text-gray-700" {...props} />,
  ul: (props) => (
    <ul
      className="list-disc pl-6 mb-5 text-gray-700 leading-relaxed"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 mb-5 text-gray-700 leading-relaxed"
      {...props}
    />
  ),
  li: (props) => <li className="mb-1">{props.children}</li>,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-6 bg-blue-50 p-3 rounded-md"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-red-700"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-900 text-white text-sm rounded-md p-4 overflow-x-auto my-6"
      {...props}
    />
  ),
};
