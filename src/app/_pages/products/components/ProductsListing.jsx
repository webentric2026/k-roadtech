"use client";

import { useCallback, useRef, useState } from "react";
import ProductSearchToolbar from "@/app/_pages/products/components/ProductSearchToolbar";
import ProductGrid from "@/app/_pages/products/components/ProductGrid";
import { ALL_PRODUCTS } from "@/app/_pages/products/data/products";

/**
 * Client wrapper for product search + grid. Holds the filtered product state
 * so the search toolbar and product grid can share it.
 * `defaultCategory` is the category name pre-selected from the URL.
 */
export default function ProductsListing({
  initialProducts,
  defaultCategory,
}) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const toolbarRef = useRef(null);

  const handleResultsChange = useCallback(
    (products) => {
      setFilteredProducts(products);
      if (toolbarRef.current) {
        toolbarRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  return (
    <>
      <ProductSearchToolbar
        key={defaultCategory}
        initialProducts={ALL_PRODUCTS}
        defaultCategory={defaultCategory}
        onResultsChange={handleResultsChange}
        ref={toolbarRef}
      />

      <section id="product-listing" aria-label="Product listing" className="w-full bg-white text-[#0B0B0B]">
        <div className="mx-auto w-full max-w-[1600px] px-[clamp(20px,5vw,80px)] py-12 lg:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 lg:mb-14" data-aos="fade-up">
            <div>
              <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">
                Products<span className="text-[#E74725]">.</span>
              </h2>
              <p className="mt-2 text-[14px] text-[#5f5f5f]">
                Showing {filteredProducts.length} product{
                  filteredProducts.length !== 1 ? "s" : ""
                }
              </p>
            </div>
          </div>
          <ProductGrid products={filteredProducts} pageSize={16} />
        </div>
      </section>
    </>
  );
}
