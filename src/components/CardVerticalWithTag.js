'use client';
import React from "react";
import { ArrowRight } from "lucide-react"; // icon mũi tên
import Image from "next/image";

export default function CardVerticalWithTag({ image, tag, title, description, image_alt }) {
  return (
    <div className="w-full overflow-hidden cursor-pointer shadow-md shadow bg-white group rounded-md">
      <Image
        src={image}
        alt={image_alt}
        width={800}
        height={600}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        priority
        placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAABQAQCdASoIAAUADMDOJQAAJwEAAPc1cCYytxXdWwAAAA=="
      />

      <div className="p-4 flex flex-col gap-2">
        <span className="text-[11px] bg-blue-100 uppercase font-medium text-primary bg-blue-50 px-2 py-1 rounded-full w-fit">
          {tag}
        </span>

        <h3 className="text-lg font-semibold leading-snug group-hover:text-primary">
          {title}
        </h3>

        <p className="text-sm line-clamp-3">
          {description}
        </p>

        <button
          className="mt-3 cursor-pointer inline-flex justify-end items-center gap-1 text-sm font-medium text-primary transition-colors"
          onClick={() => {}}
        >
          Read more <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
