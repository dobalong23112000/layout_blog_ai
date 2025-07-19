import CardHorizontalWithImage from "../CardHorizontalWithImage";

const dummyData = [
  {
    image: "images/warning/5.jpg",
    tag: "Tech",
    title: "How AI is Changing Everything",
    description:
      "Explore how artificial intelligence is disrupting industries from healthcare to finance.",
    date: "July 18, 2025",
  },
  {
    image: "images/warning/5.jpg",
    tag: "Design",
    title: "The Future of UX in 2025",
    description:
      "A deep dive into user experience trends that are defining the digital world.",
    date: "July 16, 2025",
  },
  {
    image: "images/warning/5.jpg",
    tag: "Code",
    title: "10 VSCode Extensions for Productivity",
    description:
      "Speed up your development workflow with these must-have VSCode tools.",
    date: "July 14, 2025",
  },
  {
    image: "images/warning/5.jpg",
    tag: "Cloud",
    title: "Serverless Explained Simply",
    description:
      "What is serverless architecture and why it's a big deal in cloud computing.",
    date: "July 12, 2025",
  },
];

export default function CardGridSection() {
  return (
    <section className="py-8 bg-gray-50">
        <h2 className="text-xl font-bold uppercase mb-6">Featured Articles</h2>
      <div className="grid grid-cols-12 gap-6">
        {dummyData.map((item, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-6">
            <CardHorizontalWithImage {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
