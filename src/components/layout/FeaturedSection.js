import React from "react";
import CardHorizontalWithAuthor from "../CardHorizontalWithAuthor";
import CardPostAuthor  from "../CardPostAuthor";

export default function FeaturedSection() {
  const latestUpdates = [
    {
      image: "/images/warning/2.jpg",
      title: "Unreal Engine 5: What Developers Need to Know",
      description: "Explore the groundbreaking features in UE5 that are changing the landscape of game development.",
      publishDate: "July 17, 2025",
      readTime: "6 min read",
      author: {
        name: "Alex Morgan",
        avatar: "/images/warning/1.jpg",
      },
    },
    {
      image: "/images/warning/2.jpg",
      title: "Building Immersive Worlds: Tips from the Pros",
      description: "Top-level designers share how they craft believable game environments.",
      publishDate: "July 16, 2025",
      readTime: "4 min read",
      author: {
        name: "Jamie Lin",
        avatar: "/images/warning/1.jpg",
      },
    },
    {
      image: "/images/warning/2.jpg",
      title: "Building Immersive Worlds: Tips from the Pros",
      description: "Top-level designers share how they craft believable game environments.",
      publishDate: "July 16, 2025",
      readTime: "4 min read",
      author: {
        name: "Jamie Lin",
        avatar: "/images/warning/1.jpg",
      },
    },
    {
      image: "/images/warning/2.jpg",
      title: "Building Immersive Worlds: Tips from the Pros",
      description: "Top-level designers share how they craft believable game environments.",
      publishDate: "July 16, 2025",
      readTime: "4 min read",
      author: {
        name: "Jamie Lin",
        avatar: "/images/warning/1.jpg",
      },
    },
  ];

  const featuredBlogs = [
    {
      image: "/images/warning/2.jpg",
      title: "5 Indie Games That Are Redefining the Genre",
      description: "A closer look at the innovative ideas coming out of the indie game scene.",
      publishDate: "July 15, 2025",
      readTime: "5 min read",
      author: {
        name: "Chris Taylor",
        avatar: "/images/warning/1.jpg",
      },
    },
    {
      image: "/images/warning/2.jpg",
      title: "Inside the Mind of a Game Narrative Designer",
      description: "What it takes to craft compelling storylines in modern video games.",
      publishDate: "July 14, 2025",
      readTime: "7 min read",
      author: {
        name: "Morgan Reid",
        avatar: "/images/warning/1.jpg",
      },
    },
    {
      image: "/images/warning/2.jpg",
      title: "Inside the Mind of a Game Narrative Designer",
      description: "What it takes to craft compelling storylines in modern video games.",
      publishDate: "July 14, 2025",
      readTime: "7 min read",
      author: {
        name: "Morgan Reid",
        avatar: "/images/warning/1.jpg",
      },
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8">
      {/* LATEST UPDATES */}
      <div className="md:col-span-9">
        <h2 className="text-xl font-semibold mb-4">LATEST UPDATES</h2>
        <div className="space-y-6">
          {latestUpdates.map((item, index) => (
            <CardHorizontalWithAuthor key={index} {...item} />
          ))}
        </div>
      </div>

      {/* FEATURED BLOGS */}
      <div className="md:col-span-3">
        <h2 className="text-xl font-semibold mb-4">FEATURED BLOGS</h2>
        <div className="space-y-6">
          {featuredBlogs.map((item, index) => (
            <CardPostAuthor key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
