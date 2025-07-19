'use client';
import React from "react";
import CardVerticalWithTag from "../CardVerticalWithTag"; // import từ file trước đó

const cards = [
  {
    image: "/images/warning/3.jpg",
    tag: "Technology",
    title: "AI in Everyday Life",
    description: "How artificial intelligence is shaping our daily experiences.",
  },
  {
    image: "/images/warning/3.jpg",
    tag: "Urban",
    title: "Smart Cities of Tomorrow",
    description: "Discover innovations in urban design and infrastructure.",
  },
  {
    image: "/images/warning/3.jpg",
    tag: "Health",
    title: "Digital Health Trends 2025",
    description: "Explore the future of healthcare through digital tools.",
  },
  {
    image: "/images/warning/3.jpg",
    tag: "Environment",
    title: "Nature Reimagined",
    description: "Blending technology with sustainability for a greener planet.",
  },
  {
    image: "/images/warning/3.jpg",
    tag: "Design",
    title: "Minimalist UX Principles",
    description: "Designing intuitive user interfaces that just work.",
  },
  {
    image: "/images/warning/3.jpg",
    tag: "Innovation",
    title: "The Rise of Robotics",
    description: "How machines are becoming part of our everyday lives.",
  },
];

export default function SectionCardGrid() {
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold uppercase mb-6 text-primary">Featured Articles</h2>

      <div className="grid grid-cols-12 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="sm:col-span-4 col-span-12">
            <CardVerticalWithTag
              image={card.image}
              tag={card.tag}
              title={card.title}
              description={card.description}
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
