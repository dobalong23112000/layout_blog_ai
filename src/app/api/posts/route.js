// /app/api/posts/route.ts

import { supabase } from '../../../lib/supabaseClient'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()

    const {
      title,
      description,
      slug,
      content,
      image,
      image_alt,
      published_at,
      updated_at,
      created_at,
      is_published,
      author_id,
      category_id,
      tags = [],
    } = body

    // Kiểm tra các trường bắt buộc
    if (!title || !slug || !content || !author_id || !category_id) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert bài viết
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          description,
          slug,
          content,
          image,
          image_alt,
          published_at: published_at || new Date().toISOString(),
          updated_at: updated_at || new Date().toISOString(),
          created_at: created_at || new Date().toISOString(),
          is_published: is_published ?? true,
          author_id,
          category_id,
          tags, // kiểu JSON array
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Insert error:', error)
      return NextResponse.json({ message: 'Insert failed', error }, { status: 500 })
    }

    return NextResponse.json({ message: 'Post saved successfully', data }, { status: 201 })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
export async function GET(req) {
  return NextResponse.json({ message: 'API is working ✅' }, { status: 200 })
}