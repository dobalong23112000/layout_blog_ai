import CardHorizontalWithAuthor from "../../components/CardHorizontalWithAuthor";
import { supabase } from "../../lib/supabaseClient";

export const revalidate = 3600; // regenerate each hour

export default async function BlogListPage() {
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
      <div className="md:col-span-9">
        {posts?.map((item, index) => (
          <CardHorizontalWithAuthor key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
