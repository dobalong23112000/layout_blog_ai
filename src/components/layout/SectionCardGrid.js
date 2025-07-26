import React from "react";
import CardVerticalWithTag from "../CardVerticalWithTag"; // import từ file trước đó
import { supabase } from "../../lib/supabaseClient";

export default async function SectionCardGrid() {
  const { data: posts, count } = await supabase
        .from("posts")
        .select("image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)", { count: "exact" })
        .eq("is_published", true)
        .order("published_at", { ascending: false }).range(0,5);
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold uppercase mb-6 text-primary">Featured Articles</h2>

      <div className="grid grid-cols-12 gap-6">
        {posts.map((card, idx) => (
          <div key={idx} className="sm:col-span-4 col-span-12">
            <CardVerticalWithTag
              image={card.image}
              tag={card.tags[0]}
              image_alt={card.image_alt}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
