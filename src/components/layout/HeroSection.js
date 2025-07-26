import React from "react";
import CardSimple from "../CardSimple";
import CardWithImage from "../CardWithImage";
import Image from "next/image";
import { supabase } from "../../lib/supabaseClient";
import { format } from "date-fns";

export default async function HeroSection() {
  const { data: posts, count } = await supabase
    .from("posts")
    .select("image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)", { count: "exact" })
    .eq("is_published", true)
    .order("published_at", { ascending: false }).range(0,2);
    const { data: newPosts } = await supabase
    .from("posts")
    .select("image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)")
    .eq("is_published", true)
    .order("published_at", { ascending: false }).range(0,5);
  return (
    <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Left Sidebar - Latest News */}
      <aside className="md:col-span-3 space-y-4">
        <h2 className="text-xl font-semibold uppercase text-primary">
          Latest News
        </h2>
        <div className="space-y-3 bg-primary  p-4 rounded-md">
          {newPosts.map((item, index) => (
            <CardSimple
              key={index}
              title={item.title}
              date={format(new Date(item.published_at ?? null), "dd/MM/yyyy")}
            />
          ))}
        </div>
      </aside>

      {/* Hero Section */}
      <div className="md:col-span-6 relative overflow-hidden  rounded-b-md ">
        <Image
          src="/images/warning/5.jpg"
          alt="Hero"
          width={800}
          height={600}
          className="w-full h-64 md:h-74 object-cover border-0 rounded-t-md"
          priority
          placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAABQAQCdASoIAAUADMDOJQAAJwEAAPc1cCYytxXdWwAAAA=="
        />
        <div className="sm:absolute relative bg-primary text-white px-6 py-3 flex flex-col justify-end border border-primary rounded-b-md border-t-0 pb-6 shadow-md shadow">
          <span className="text-[11px] uppercase cursor-pointer mb-3 bg-blue-100 uppercase font-medium text-primary bg-blue-50 px-2 py-1 rounded-full w-fit">
            FEATURED
          </span>
          <h1 className="text-2xl md:text-3xl font-bold hover:underline cursor-pointer">
            The Future of Indie Game Development in 2025
          </h1>
          <p className="mt-2 text-sm max-w-md line-clamp-2">
            Explore how AI tools and new engines are reshaping solo game
            creators.
          </p>
        </div>
      </div>

      {/* Right Sidebar - Trending */}
      <aside className="md:col-span-3 space-y-4">
        <h2 className="text-xl font-semibold uppercase text-primary">
          Trending
        </h2>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <CardWithImage key={index} {...post} />
          ))}
        </div>
      </aside>
    </section>
  );
}
