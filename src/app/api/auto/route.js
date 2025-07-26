import { supabase } from "../../../lib/supabaseClient";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.x.ai/v1",
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { pillar_topic, cluster_idea,keyword,intent,CTA, author_id, category_id } = body;

    if (!pillar_topic || !author_id || !category_id) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prompt gửi đến Grok API
    const prompt = `
You are an experienced SEO content writer. Use the following inputs to generate a high-quality, SEO-optimized, and helpful blog post in markdown format. Write in a way that is informative, professional, and tailored to the audience in ${"EU"}.

Inputs:
- Pillar Topic: ${pillar_topic}
- Cluster Idea: ${cluster_idea}
- Target Keyword (optional): ${keyword}
- Search Intent: ${intent}
- Language: ${"English"}
- CTA: ${CTA}

Instructions:
1. Write an SEO-optimized blog **title** (maximum 60 characters):
   - Include the primary keyword close to the beginning
   - Be benefit-driven, relevant, and professional

2. Write a **meta description** (150–160 characters):
   - Use the primary keyword once
   - Clearly explain what the reader will gain

3. Generate a **clean URL slug**:
   - Lowercase, hyphenated, no stop words

4. Determine the **primary keyword** (if not provided) and suggest 3–5 **secondary keywords** relevant to the cluster idea and search intent.

5. Write the full blog post in **markdown format**, structured like this:
   - Start with \`#\` H1 using the title
   - Write a short intro paragraph (2–3 sentences) using the primary keyword in the **first sentence**
   - Insert an image placeholder after the intro:  
     \`![{image_alt}](/images/warning/7.jpg)\`
   - Organize the main content with \`## H2\` and \`### H3\` subheadings
   - Include:
     - Bullet points
     - Actionable tips or real-life examples
     - Two internal markdown links (to other cluster or pillar topics)
   - Use a tone that’s educational, neutral, and helpful — not salesy

6. Use the **primary keyword naturally 5–7 times**, including in:
   - H1, intro, H2/H3 headings, and body

7. Keep the total word count between **1,200–1,500 words**

8. End the article with the CTA provided above (as a final paragraph or section)

Output Format:
Return the entire result as a **JSON object**, structured like this:

\`\`\`json
{
  "title": "",
  "meta_description": "",
  "slug": "",
  "primary_keyword": "",
  "secondary_keywords": [],
  "content": "--- markdown content here ---",
  "tags": [],
  "image_alt": ""
}
\`\`\`
`;

    const completion = await client.chat.completions.create({
      model: "grok-3-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a professional SEO content strategist and article writer specialized in health, wellness, and fitness. Your task is to analyze blog ideas and generate optimized article content in English, using markdown format, structured for maximum user engagement and search visibility.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
    });
    const resultText = completion.choices[0].message.content;
    const jsonStart = resultText.indexOf("{");
    const parsed = JSON.parse(resultText.slice(jsonStart));

    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title: parsed.title,
          description: parsed.meta_description,
          slug: parsed.slug,
          content: parsed.content,
          image: "/images/warning/7.jpg",
          image_alt: parsed.image_alt || "",
          published_at: now,
          updated_at: now,
          created_at: now,
          is_published: true,
          author_id,
          category_id,
          tags: parsed.secondary_keywords || [],
          primary_keyword: parsed.primary_keyword || "",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Insert error:", error);
      return NextResponse.json(
        { message: "Insert failed", error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Post saved successfully", data },
      { status: 201 }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
