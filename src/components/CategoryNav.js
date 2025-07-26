import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

export default async function CategoryNav() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id, name, slug");

  if (error) {
    console.error("Failed to load categories:", error.message);
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-start md:justify-center">
      {categories?.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="font-semibold text-lg hover:underline"
        >
          {category.name}
        </Link>
      ))}
      <Link href="/about" className="font-semibold text-lg hover:underline">
        About Us
      </Link>
    </div>
  );
}
