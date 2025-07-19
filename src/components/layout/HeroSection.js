import React from "react";
import CardSimple from "../CardSimple";
import CardWithImage from "../CardWithImage";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Left Sidebar - Latest News */}
      <aside className="md:col-span-3 space-y-4">
        <h2 className="text-xl font-semibold uppercase text-primary">Latest News</h2>
        <div className="space-y-3 bg-primary  p-4 rounded-md">
          <CardSimple title="AI Revolutionizes Game Asset Creation" date="July 17, 2025" />
          <CardSimple title="Best Sound Design Tools of the Year" date="July 15, 2025" />
          <CardSimple title="Why Solo Devs Are Thriving in 2025" date="July 13, 2025" />
           <CardSimple title="Why Solo Devs Are Thriving in 2025" date="July 13, 2025" />
            <CardSimple title="Why Solo Devs Are Thriving in 2025" date="July 13, 2025" />
             <CardSimple title="Why Solo Devs Are Thriving in 2025" date="July 13, 2025" />
        </div>
      </aside>

      {/* Hero Section */}
      <div className="md:col-span-6 relative overflow-hidden  ">
        <Image
          src="/images/warning/5.jpg"
          alt="Hero"
          width={800}
          height={296}
          className="w-full h-64 md:h-74 object-cover border-0 rounded-t-md"
          priority
        />
        <div className="sm:absolute relative bg-primary text-white px-6 py-3 flex flex-col justify-end border border-primary rounded-b-md border-t-0 pb-6 shadow-md shadow">
          <span className="text-[11px] uppercase cursor-pointer mb-3 bg-blue-100 uppercase font-medium text-primary bg-blue-50 px-2 py-1 rounded-full w-fit">FEATURED</span>
          <h1 className="text-2xl md:text-3xl font-bold hover:underline cursor-pointer">
            The Future of Indie Game Development in 2025
          </h1>
          <p className="mt-2 text-sm max-w-md">
            Explore how AI tools and new engines are reshaping solo game creators.
          </p>
        </div>
      </div>

      {/* Right Sidebar - Trending */}
      <aside className="md:col-span-3 space-y-4">
        <h2 className="text-xl font-semibold uppercase text-primary">Trending</h2>
        <div className="space-y-4">
          <CardWithImage
            image="/images/warning/5.jpg"
            tag="Tips"
            title="Top 10 Unreal Engine Tips for 2025"
            description="Learn what’s new in UE5 and how to optimize your indie workflow."
            date="July 12, 2025"
          />
          <CardWithImage
            image="/images/warning/3.jpg"
            tag="Battle"
            title="Unity vs Godot: Which One Wins?"
            description="We dive deep into features, performance, and community support."
            date="July 10, 2025"
          />
          <CardWithImage
            image="/images/warning/3.jpg"
            tag="Battle"
            title="Unity vs Godot: Which One Wins?"
            description="We dive deep into features, performance, and community support."
            date="July 10, 2025"
          />
          
        </div>
      </aside>
    </section>
  );
}