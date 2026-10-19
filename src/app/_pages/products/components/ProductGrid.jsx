"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

/**
 * Product grid — responsive columns, pagination or load-more.
 * Desktop: 4 columns, small desktop: 3, tablet: 2, mobile: 1.
 */
export default function ProductGrid({ products, pageSize = 16 }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / pageSize);
  const current = products.slice((page - 1) * pageSize, page * pageSize);

  const goToPage = useCallback((p) => {
    const next = Math.max(1, Math.min(p, totalPages || 1));
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [totalPages]);

  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-[18px] font-bold tracking-tight text-[#0B0B0B]">
          No products found
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-[#5f5f5f]">
          Try changing your search term or clearing the selected filters.
        </p>
        <button
          type="button"
          onClick={() => {
            goToPage(1);
            window.dispatchEvent(new Event("clear-filters"));
          }}
          className="mt-6 inline-flex items-center gap-1.5 rounded-sm border border-[#E74725] bg-[#E74725]/10 px-4 py-2 text-[13px] font-semibold text-[#E74725] transition-colors duration-150 hover:bg-[#E74725] hover:text-white focus-visible:outline-2 focus-visible:outline-[#E74725]"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {current.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="h-[42px] rounded-[3px] border border-black/15 px-5 text-[14px] font-semibold transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            Previous
          </button>
          <span className="text-[14px] text-[#5f5f5f]">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
            className="h-[42px] rounded-[3px] border border-black/15 px-5 text-[14px] font-semibold transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-[#E74725]"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
