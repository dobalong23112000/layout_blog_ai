'use client';
import React from "react";
import { ArrowRight } from "lucide-react"; // icon mũi tên

export default function CardVerticalWithTag({ image, tag, title, description, onClick }) {
  return (
    <div className="w-full overflow-hidden cursor-pointer border bg-white group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4 flex flex-col gap-2">
        <span className="text-[11px] bg-blue-100 uppercase font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full w-fit">
          {tag}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-700">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        <button
          className="mt-3 inline-flex justify-end items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          onClick={onClick}
        >
          Read more <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
