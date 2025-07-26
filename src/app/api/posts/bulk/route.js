// /app/api/posts/bulk/route.ts

import { supabase } from '../../../../lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const posts = await req.json()

    if (!Array.isArray(posts) || posts.length === 0) {
      return NextResponse.json({ message: 'Invalid or empty list' }, { status: 400 })
    }

    // Kiểm tra mỗi bài viết có đủ trường cần thiết không
    const invalidPost = posts.find(
      (post) =>
        !post.title ||
        !post.slug ||
        !post.content ||
        !post.author_id ||
        !post.category_id
    )

    if (invalidPost) {
      return NextResponse.json(
        { message: 'One or more posts are missing required fields' },
        { status: 400 }
      )
    }

    const now = new Date().toISOString()
    const preparedPosts = posts.map((post) => ({
      title: post.title,
      description: post.description || '',
      slug: post.slug,
      content: post.content,
      image: post.image || '',
      image_alt: post.image_alt || '',
      published_at: post.published_at || now,
      updated_at: post.updated_at || now,
      created_at: post.created_at || now,
      is_published: post.is_published ?? true,
      author_id: post.author_id,
      category_id: post.category_id,
      tags: post.tags ?? [],
    }))

    const { data, error } = await supabase
      .from('posts')
      .insert(preparedPosts)
      .select()

    if (error) {
      console.error('Bulk insert error:', error)
      return NextResponse.json({ message: 'Bulk insert failed', error }, { status: 500 })
    }

    return NextResponse.json({ message: 'Bulk insert successful' }, { status: 201 })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
