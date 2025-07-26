import CardHorizontalWithAuthor from "../../components/CardHorizontalWithAuthor";
import CardPostAuthor from "../../components/CardPostAuthor";
import { supabase } from "../../lib/supabaseClient";
import PaginationControls from '../../components/PaginationControls'

export const dynamic = "force-dynamic";
const PAGE_SIZE = 5;
export default async function BlogListPage({ searchParams  }) {
  const { page } = await searchParams
  const currentPage = parseInt(page || "1", 10);
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;
  const { data: posts, count } = await supabase
    .from("posts")
    .select("*, authors(*)", { count: "exact" })
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .range(from, to);
  const totalPages = Math.ceil((count || 0) / PAGE_SIZE);

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
      <div className="md:col-span-9">
        <h2 className="text-xl font-semibold mb-4 text-primary">BLOGS</h2>
        {posts?.map((item, index) => (
          <CardHorizontalWithAuthor key={index} {...item} />
        ))}

        {/* Pagination Controls */}
        <PaginationControls totalPages={totalPages} currentPage={currentPage} />
      </div>

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
