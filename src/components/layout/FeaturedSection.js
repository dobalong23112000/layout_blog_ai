import React from "react";
import CardHorizontalWithAuthor from "../CardHorizontalWithAuthor";
import CardPostAuthor  from "../CardPostAuthor";
import { supabase } from "../../lib/supabaseClient";

export default async function FeaturedSection() {
  const { data: posts, count } = await supabase
      .from("posts")
      .select("image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)", { count: "exact" })
      .eq("is_published", true)
      .order("published_at", { ascending: false }).range(0,3);
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
      {/* LATEST UPDATES */}
      <div className="md:col-span-9">
        <h2 className="text-xl font-semibold mb-4 text-primary">LATEST UPDATES</h2>
        <div className="space-y-6">
          {posts.map((item, index) => (
            <CardHorizontalWithAuthor key={index} {...item} />
          ))}
        </div>
      </div>

      {/* FEATURED BLOGS */}
      <div className="md:col-span-3">
        <h2 className="text-xl font-semibold mb-4 text-primary">FEATURED BLOGS</h2>
        <div className="space-y-6">
          {posts.map((item, index) => (
            <CardPostAuthor key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
