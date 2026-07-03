import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { loadAllProducts, productDetailsUrl } from "../lib/products";
import { publicUrl } from "../lib/publicUrl";

function getPageTitle(sectionQuery, cleanSearch) {
  if (cleanSearch) return "Search Results";
  if (sectionQuery === "Best Sellers") return "Best Sellers";
  if (sectionQuery === "New") return "New Products";
  if (sectionQuery === "Sale") return "Sale Products";

  return sectionQuery || "All Products";
}

function AllProducts({ onAddToCart, searchQuery = "", sectionQuery = "" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllProducts()
      .then((items) => {
        setProducts(items);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  const cleanSearch = searchQuery.trim().toLowerCase();
  const cleanSection = sectionQuery.trim().toLowerCase();
  const sectionProducts = cleanSection === "sale"
    ? products.filter((product) => product.discount)
    : cleanSection
      ? products.filter((product) => product.source.toLowerCase() === cleanSection || product.category?.toLowerCase() === cleanSection)
      : products;
  const filteredProducts = cleanSearch
    ? sectionProducts.filter((product) =>
        [product.title, product.text, product.source, product.brand, product.category, product.skin]
          .join(" ")
          .toLowerCase()
          .includes(cleanSearch)
      )
    : sectionProducts;

  return (
    <main className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#/" className="text-sm text-lime-700 hover:underline">
            Back to home
          </a>
          <h1 className="mt-3 break-words text-3xl font-bold sm:text-4xl">
            {getPageTitle(sectionQuery, cleanSearch)}
          </h1>
          <p className="mt-2 text-gray-500">
            {loading
              ? "Loading products..."
              : cleanSearch
                ? `${filteredProducts.length} results for "${searchQuery}"`
                : `TOTAL ${filteredProducts.length} items`}
          </p>
        </div>
      </div>

      {!loading && products.length === 0 && (
        <p className="rounded border border-gray-200 p-6 text-gray-500">
          Products could not be loaded.
        </p>
      )}

      {!loading && products.length > 0 && filteredProducts.length === 0 && (
        <p className="rounded border border-gray-200 p-6 text-gray-500">
          No products found. Try another search.
        </p>
      )}

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts.map((product) => (
          <article key={product.id} className="mx-auto w-full max-w-[360px] min-w-0 overflow-hidden sm:max-w-none">
            <a href={productDetailsUrl(product.id)} className="relative block">
              <img
                src={publicUrl(product.image)}
                alt={product.title}
                className="h-[220px] w-full bg-gray-50 object-contain lg:bg-transparent lg:object-cover"
              />
              <span className="absolute left-0 top-0 bg-black px-2 py-1 text-xs font-bold text-white">
                {product.source}
              </span>
            </a>

            <div className="mt-4 flex items-start justify-between gap-3">
              <a href={productDetailsUrl(product.id)} className="min-w-0 break-words font-bold hover:underline">
                {product.title}
              </a>
              <button
                className="text-xl text-gray-400 hover:text-red-500"
                type="button"
                aria-label="Add to cart"
                title="Add to cart"
                onClick={() => onAddToCart(product)}
              >
                <HiOutlineShoppingBag />
              </button>
            </div>

            <p className="mt-2 line-clamp-2 max-w-full whitespace-normal break-words text-sm">{product.text}</p>

            {product.discount && (
              <p className="mt-4 text-gray-400 line-through">{product.discount}</p>
            )}

            <p className="mt-1 break-words text-xl font-bold text-red-500">{product.price}</p>

            {product.rating && (
              <p className="mt-3 flex gap-1 text-gray-400">
                <TiStarFullOutline className="mt-1" />
                {product.rating}
              </p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}

export default AllProducts;
