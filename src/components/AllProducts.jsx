import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";

function makeProduct(item, source, id) {
  return {
    id: `${source}-${item.id || id}`,
    source,
    title: item.title || item.artist || item.name,
    text: item.text || item.album || source,
    image: item.image,
    discount: item.discount,
    price: item.price,
    rating: item.rating,
  };
}

function AllProducts({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const [cards, recommend, foryou, kpop, unove] = await Promise.all([
        fetchPublicJson("/cards/cards.json"),
        fetchPublicJson("/recommend/recommend.json"),
        fetchPublicJson("/foryou/foryou.json"),
        fetchPublicJson("/kpop/kpop.json"),
        fetchPublicJson("/unove/unove.json"),
      ]);

      const unoveProducts = unove.flatMap((section) =>
        section.products.map((product) => makeProduct(product, section.title, product.id))
      );

      setProducts([
        ...cards.map((item) => makeProduct(item, "Best Sellers", item.id)),
        ...recommend.map((item) => makeProduct(item, "Chosen For You", item.id)),
        ...foryou.map((item) => makeProduct(item, "Recommendations", item.id)),
        ...unoveProducts,
        ...kpop.map((item) => makeProduct(item, "K-POP", item.id)),
      ]);
      setLoading(false);
    }

    loadProducts().catch(() => {
      setProducts([]);
      setLoading(false);
    });
  }, []);

  return (
    <main className="px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a href="#/" className="text-sm text-lime-700 hover:underline">
            Back to home
          </a>
          <h1 className="mt-3 text-4xl font-bold">All Products</h1>
          <p className="mt-2 text-gray-500">
            {loading ? "Loading products..." : `${products.length} products`}
          </p>
        </div>
      </div>

      {!loading && products.length === 0 && (
        <p className="rounded border border-gray-200 p-6 text-gray-500">
          Products could not be loaded.
        </p>
      )}

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <article key={product.id}>
            <div className="relative">
              <img
                src={publicUrl(product.image)}
                alt={product.title}
                className="h-[220px] w-full object-cover"
              />
              <span className="absolute left-0 top-0 bg-black px-2 py-1 text-xs font-bold text-white">
                {product.source}
              </span>
            </div>

            <div className="mt-4 flex items-start justify-between gap-3">
              <h2 className="font-bold">{product.title}</h2>
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

            <p className="mt-2 line-clamp-2 text-sm">{product.text}</p>

            {product.discount && (
              <p className="mt-4 text-gray-400 line-through">{product.discount}</p>
            )}

            <p className="mt-1 text-xl font-bold text-red-500">{product.price}</p>

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
