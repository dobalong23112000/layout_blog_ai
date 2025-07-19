import CardHorizontalWithAuthor from "../../components/CardHorizontalWithAuthor";
import CardPostAuthor from "../../components/CardPostAuthor";
import { supabase } from "../../lib/supabaseClient";
export const dynamic = "force-dynamic";
export default async function BlogListPage() {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });
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
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
      <div className="md:col-span-9">
        <h2 className="text-xl font-semibold mb-4 text-primary">BLOGS</h2>
        {posts?.map((item, index) => (
          <CardHorizontalWithAuthor key={index} {...item} />
        ))}
      </div>

      <div className="md:col-span-3">
        <h2 className="text-xl font-semibold mb-4 text-primary">FEATURED BLOGS</h2>
        <div className="space-y-6">
          {featuredBlogs.map((item, index) => (
            <CardPostAuthor key={index} {...item} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
