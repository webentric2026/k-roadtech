import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/assets/images";
import { ArrowRight } from "@/app/_pages/shared/components/icons";

/**
 * Product card — image, name, model number, category, and two actions.
 * Follows existing card conventions: rounded border, subtle shadow, brand hover.
 */
export default function ProductCard({ product }) {
  return (
    <article
      data-aos="fade-up"
      className="group relative overflow-hidden rounded-[4px] border border-black/10 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#E74725]/40 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
    >
      {/* Product image / placeholder */}
      <div className="relative h-[200px] bg-[#F5F5F5] overflow-hidden">
        {product.image && IMAGES.productCutouts?.[product.image] ? (
          <Image
            src={IMAGES.productCutouts[product.image]}
            alt={`${product.name} product image`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain object-center"
            priority={false}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center rounded-sm border border-dashed border-black/10 text-[#A3A3A3] text-[11px] font-medium uppercase tracking-[0.14em]">
            Image
          </div>
        )}
        <span
          className="absolute top-3 left-3 rounded-sm bg-[#0B0B0B]/85 px-2 py-0.5 text-[10px] font-semibold text-white"
        >
          {product.subcategory}
        </span>
      </div>

      <div className="p-5">
        <Link
          href={`/products/${product.id}`}
          className="block mb-1"
        >
          <h3 className="text-[15px] leading-6 font-bold tracking-tight text-[#0B0B0B] group-hover:text-[#E74725] transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.modelNumber && (
          <p className="text-[12px] text-[#A3A3A3] font-medium">
            {product.modelNumber}
          </p>
        )}
        <p className="mt-2 text-[13.5px] leading-6 text-[#5f5f5f]">
          {product.description}
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex w-full sm:w-auto h-[40px] items-center justify-center gap-2 rounded-[3px] bg-[#E74725] px-4 text-[13.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#c93a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex-1"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto h-[40px] items-center justify-center gap-2 rounded-[3px] border border-black/15 px-4 text-[13.5px] font-semibold text-[#0B0B0B] transition-colors duration-150 hover:border-[#E74725] hover:text-[#E74725] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E74725] sm:flex-1"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
