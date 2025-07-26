import { supabase } from "../../lib/supabaseClient";
import CardHorizontalWithImage from "../CardHorizontalWithImage";


export default async function CardGridSection() {
  const { data: posts, count } = await supabase
          .from("posts")
          .select("image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)", { count: "exact" })
          .eq("is_published", true)
          .order("published_at", { ascending: false }).range(0,3);
  return (
    <section className="py-8">
        <h2 className="text-xl font-bold uppercase mb-6 text-primary">Featured Articles</h2>
      <div className="grid grid-cols-12 gap-6">
        {posts.map((item, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-6">
            <CardHorizontalWithImage {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
