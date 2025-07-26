import CardHorizontalWithAuthor from "../../../components/CardHorizontalWithAuthor";
import CardPostAuthor from "../../../components/CardPostAuthor";
import PaginationControls from "../../../components/PaginationControls";
import { supabase } from "../../../lib/supabaseClient";

export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;

export default async function CategoryListPage({ params, searchParams }) {
  const { slug } = await params;
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1", 10);
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  // Step 1: Lấy category id theo slug
  const { data: category } = await supabase
    .from("categories")
    .select("id, name")
    .eq("slug", slug)
    .single();

  if (!category) {
    return <p className="text-center text-red-500">Category not found</p>;
  }
  // Step 2: Lấy bài viết thuộc category đó
  const { data: posts, count } = await supabase
    .from("posts")
    .select(
    "image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)",
    { count: "exact" }
  )
    .eq("category_id", category.id)
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .range(from, to);
  const { data: otherposts } = await supabase
    .from("posts")
    .select("image, title, description, slug, published_at, tags, image_alt, authors(*), categories(*)")
    .neq("category_id", category.id)
    .eq("is_published", true)
    .order("published_at", { ascending: false }).range(0, 3);
  const totalPages = Math.ceil((count || 0) / PAGE_SIZE);

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
      <div className="md:col-span-9">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          {category.name} Articles
        </h2>
        {posts?.length > 0 ? (
          posts.map((item, index) => (
            <CardHorizontalWithAuthor key={index} {...item} />
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
        <PaginationControls totalPages={totalPages} currentPage={currentPage} />
      </div>

      <div className="md:col-span-3">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          FEATURED BLOGS
        </h2>
        <div className="space-y-6">
          {otherposts.map((item, index) => (
            <CardPostAuthor key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
