import { supabase } from "../../../lib/supabaseClient";
import { notFound } from "next/navigation";
import BlogContent from "../../../components/BlogContent";
import CardPostAuthor from "../../../components/CardPostAuthor";
import CardWithImage from "../../../components/CardWithImage";
import CardVerticalWithTag from "../../../components/CardVerticalWithTag";
import SocialShareButtons from "../../../components/SocialShareButtons";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data, error } = await supabase
    .from("posts")
    .select("*, authors(*)")
    .eq("slug", slug)
    .single();

  if (!data || error) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourwebsite.com";

  return {
    title: data.title,
    description: data.description ?? "",
    keywords: data.tags?.join(", ") ?? "",
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      url: `${baseUrl}/blog/${slug}`,
      images: [
        {
          url: data.image || `${baseUrl}/default-og.jpg`,
          alt: data.imageAlt || data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image || `${baseUrl}/default-og.jpg`],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  // Fetch main post
  const { data, error } = await supabase
    .from("posts")
    .select("*, authors(*)")
    .eq("slug", slug)
    .single();

  if (!data || error) return notFound();

  const {
    title,
    description,
    image,
    imageAlt,
    content,
    tags,
    authors,
    published_at,
    updated_at,
  } = data;

  // Fetch additional posts for suggestions
  const { data: posts } = await supabase
    .from("posts")
    .select("image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)")
    .eq("is_published", true)
    .neq("slug", slug)
    .order("published_at", { ascending: false }).range(0,5);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourwebsite.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    image: image ? `${baseUrl}${image}` : `${baseUrl}/default-og.jpg`,
    datePublished: new Date(published_at).toISOString(),
    dateModified: new Date(updated_at || published_at).toISOString(),
    author: [
      {
        "@type": "Person",
        name: authors?.name || "Unknown",
        url: authors?.url || "https://twitter.com",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Your Website Name",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: `${baseUrl}/blog/${slug}`,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 md:px-8 pb-10">
      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main content */}
      <div className="lg:col-span-9 col-span-12">
        <article className="prose lg:prose-xl mx-auto pb-8 dark:prose-invert">
          <div
            className="prose-blockquote:bg-accent/20 prose-blockquote:border-accent
            prose-blockquote:p-4 prose-blockquote:rounded-r-lg
            prose-li:marker:text-accent dark:prose-blockquote:bg-accentDark/20
            dark:prose-blockquote:border-accentDark dark:prose-li:marker:text-accentDark
            first-letter:text-3xl sm:first-letter:text-5xl"
          >
            <BlogContent content={content} />
          </div>
        </article>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-3 col-span-12 flex flex-col gap-8 sm:mt-30">
        {/* Featured */}
        <section>
          <h2 className="text-lg font-semibold text-primary uppercase mb-3">
            Featured Blogs
          </h2>
          <div className="space-y-5">
            {posts.slice(0, 3).map((item, index) => (
              <CardPostAuthor key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Trending */}
        <section>
          <h2 className="text-lg font-semibold text-primary uppercase mb-3">
            Trending
          </h2>
          <div className="space-y-4">
            {posts.slice(3, 6).map((post, index) => (
              <CardWithImage key={index} {...post} />
            ))}
          </div>
        </section>
      </div>

      {/* Social Sharing */}
      <div className="col-span-12 border-b pb-6 border-gray-300">
        <h3 className="text-lg font-semibold mb-4">📤 Share this article</h3>
        <SocialShareButtons
          shareUrl={`${baseUrl}/blog/${slug}`}
          shareText={title}
          instagramProfileUrl="https://www.instagram.com/your_actual_profile"
        />
      </div>

      {/* Suggested Posts */}
      <div className="col-span-12">
        <h2 className="text-xl font-bold uppercase mb-6 text-primary">
          📰 You may also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(3, 6).map((card, idx) => (
            <CardVerticalWithTag
              key={idx}
              image={card.image}
              tag={card.tags?.[0] ?? ""}
              image_alt={card.image_alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
