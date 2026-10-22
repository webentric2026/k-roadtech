"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { PRODUCT_CATEGORIES, ALL_PRODUCTS } from "../data/products";

function CloseIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l4 4M6 10l4-4" />
    </svg>
  );
}

/**
 * Product search and filtering toolbar.
 */
const ProductSearchToolbar = forwardRef(function ProductSearchToolbar(
  {
    initialProducts, // kept for API compatibility; toolbar filters from the full catalogue
    defaultCategory,
    onResultsChange,
  },
  ref
) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(
    defaultCategory ? defaultCategory : "all"
  );
  const [sort, setSort] = useState("name-asc");
  const searchInputRef = useRef(null);
  const debounceRef = useRef(null);

  const categories = PRODUCT_CATEGORIES.map((c) => c.name);

  // Recompute results whenever query, category, or sort changes.
  // This runs on mount as well, so a category pre-selected from the URL
  // is correctly reflected in the product grid.
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      let results = ALL_PRODUCTS;

      const trimmedQuery = query.trim();
      if (trimmedQuery) {
        const q = trimmedQuery.toLowerCase();
        results = results.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            (p.modelNumber && p.modelNumber.toLowerCase().includes(q)) ||
            p.category.toLowerCase().includes(q)
        );
      }

      if (categoryFilter !== "all") {
        results = results.filter((p) => p.category === categoryFilter);
      }

      results = [...results].sort((a, b) => {
        if (sort === "name-asc") return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
      });

      onResultsChange?.(results);
    }, 250);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, categoryFilter, sort, onResultsChange]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const clearFilters = () => {
    setQuery("");
    setCategoryFilter("all");
    setSort("name-asc");
    if (searchInputRef.current) searchInputRef.current.value = "";
  };

  const activeFilters = {
    ...(query.trim() ? { query: query.trim() } : {}),
    ...(categoryFilter !== "all" ? { category: categoryFilter } : {}),
  };

  const hasActiveFilters =
    Object.keys(activeFilters).length > 0 || sort !== "name-asc";

  return (
    <div ref={ref} aria-label="Product search and filters" data-aos="fade-up" className="w-full bg-white text-[#0B0B0B]">
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
        <div className="relative mb-8 lg:mb-10">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            ref={searchInputRef}
            id="product-search"
            type="search"
            placeholder="Search products, categories, or model numbers…"
            value={query}
            onChange={handleSearchChange}
            autoComplete="off"
            spellCheck={false}
            className="w-full h-[48px] rounded-[3px] border border-black/15 bg-[#F5F5F5] px-5 pr-12 text-[15px] focus:outline-none focus:border-[#E74725] transition-colors"
          />
          {query.trim() && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3A3A3] hover:text-[#0B0B0B] transition-colors"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:gap-5">
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-[42px] rounded-[3px] border border-black/15 bg-white px-4 pr-10 text-[14px] focus:outline-none focus:border-[#E74725] transition-colors appearance-none"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A3A3A3] pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 6l2 2 2-2" />
            </svg>
          </div>

          <div className="relative hidden sm:flex">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-[42px] rounded-[3px] border border-black/15 bg-white px-4 pr-10 text-[14px] focus:outline-none focus:border-[#E74725] transition-colors appearance-none"
            >
              <option value="name-asc">Name: A–Z</option>
              <option value="name-desc">Name: Z–A</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A3A3A3] pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 6l2 2 2-2" />
            </svg>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              aria-label="Clear all filters"
              className="inline-flex items-center gap-1.5 rounded-sm border border-[#E74725] bg-[#E74725]/10 px-3 py-1.5 text-[13px] font-semibold text-[#E74725] transition-colors duration-150 hover:bg-[#E74725] hover:text-white focus-visible:outline-2 focus-visible:outline-[#E74725]"
            >
              <CloseIcon className="h-3 w-3" /> Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProductSearchToolbar;
