import { supabase } from "../../../lib/supabaseClient";
import { notFound } from "next/navigation";
import BlogContent from "../../../components/BlogContent";
import CardPostAuthor from "../../../components/CardPostAuthor";
import CardWithImage from "../../../components/CardWithImage";
import CardVerticalWithTag from "../../../components/CardVerticalWithTag";

export const dynamic = "force-dynamic"; // Đảm bảo route không bị cache

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data || error) return {};

  return {
    title: data.title,
    description: data.description ?? "",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();
  const featuredBlogs = [
    {
      image: "/images/warning/2.jpg",
      title: "5 Indie Games That Are Redefining the Genre",
      description: "A closer look at the innovative ideas coming out of the indie game scene.",
      publishDate: "July 15, 2025",
      readTime: "5 min read",
      author: {
        name: "Chris Taylor",
        avatar: "/images/warning/1.jpg",
      },
    },
    {
      image: "/images/warning/2.jpg",
      title: "Inside the Mind of a Game Narrative Designer",
      description: "What it takes to craft compelling storylines in modern video games.",
      publishDate: "July 14, 2025",
      readTime: "7 min read",
      author: {
        name: "Morgan Reid",
        avatar: "/images/warning/1.jpg",
      },
    },
  ];
  const trendingPosts = [
    {
      image: "/images/warning/3.jpg",
      tag: "Tips",
      title: "Top 10 Unreal Engine Tips for 2025",
      description: "Learn what’s new in UE5 and how to optimize your indie workflow.",
      date: "July 12, 2025",
    },
    {
      image: "/images/warning/3.jpg",
      tag: "Battle",
      title: "Unity vs Godot: Which One Wins?",
      description: "We dive deep into features, performance, and community support.",
      date: "July 10, 2025",
    },
    {
      image: "/images/warning/3.jpg",
      tag: "Battle",
      title: "Unity vs Godot: Which One Wins?",
      description: "We dive deep into features, performance, and community support.",
      date: "July 10, 2025",
    },
  ];
  if (!data || error) return notFound();
  const cards = [
    {
      image: "/images/warning/3.jpg",
      tag: "Technology",
      title: "AI in Everyday Life",
      description: "How artificial intelligence is shaping our daily experiences.",
    },
    {
      image: "/images/warning/3.jpg",
      tag: "Urban",
      title: "Smart Cities of Tomorrow",
      description: "Discover innovations in urban design and infrastructure.",
    },
    {
      image: "/images/warning/3.jpg",
      tag: "Health",
      title: "Digital Health Trends 2025",
      description: "Explore the future of healthcare through digital tools.",
    },
    
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-9">
        <article className="prose lg:prose-xl mx-auto px-4 py-8 ">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <div className="">
            <div
              className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
      prose-blockquote:bg-accent/20 
      prose-blockquote:p-2
      prose-blockquote:px-6
      prose-blockquote:border-accent
      prose-blockquote:not-italic
      prose-blockquote:rounded-r-lg
      prose-figure:relative
      prose-figcaption:mt-1
      prose-figcaption:mb-2
      prose-li:marker:text-accent
      dark:prose-invert
      dark:prose-blockquote:border-accentDark
      dark:prose-blockquote:bg-accentDark/20
      dark:prose-li:marker:text-accentDark
      first-letter:text-3xl sm:first-letter:text-5xl"
            >
              <BlogContent content={data.content} />
            </div>
          </div>
        </article>
      </div>
      <div className="md:col-span-3 flex flex-col gap-6 md:mt-30">
        {/* Featured Blogs Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3 uppercase text-primary">Featured Blogs</h2>
          <div className="space-y-5">
            {featuredBlogs.map((item, index) => (
              <CardPostAuthor key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold uppercase text-gray-900 mb-3 text-primary">Trending</h2>
          {trendingPosts.map((post, index) => (
            <CardWithImage key={index} {...post} />
          ))}
        </section>
      </div>
      <div className="md:col-span-9 pb-6">
        <h2 className="text-xl font-bold uppercase mb-6 text-primary">You May also like</h2>
        <div className="grid grid-cols-12 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="sm:col-span-4 col-span-12">
              <CardVerticalWithTag
                image={card.image}
                tag={card.tag}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
