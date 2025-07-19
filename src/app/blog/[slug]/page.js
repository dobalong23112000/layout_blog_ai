import { supabase } from "../../../lib/supabaseClient";
import { notFound } from "next/navigation";
import BlogContent from "../../../components/BlogContent";

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

  if (!data || error) return notFound();
  return (
    <article className="prose lg:prose-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
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
    </article>
  );
}
