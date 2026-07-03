import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { loadAllProducts, productDetailsUrl } from "../lib/products";
import { publicUrl } from "../lib/publicUrl";

function getFirstLetter(text) {
  return text.trim().charAt(0).toUpperCase();
}

function getBrandGroups(products) {
  const brands = [...new Set(products.map((product) => product.brand).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b));

  return brands.reduce((groups, brand) => {
    const letter = getFirstLetter(brand);
    return {
      ...groups,
      [letter]: [...(groups[letter] || []), brand],
    };
  }, {});
}

function BrandPage({ selectedBrand = "", onAddToCart }) {
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

  const brandGroups = getBrandGroups(products);
  const brandProducts = selectedBrand
    ? products.filter((product) => product.brand.toLowerCase() === selectedBrand.toLowerCase())
    : [];

  return (
    <main className="px-4 py-10 sm:px-6">
      <a href="#/" className="text-sm text-lime-700 hover:underline">
        Back to home
      </a>

      <h1 className="mt-3 break-words text-3xl font-bold sm:text-4xl">Brands</h1>
      <p className="mt-2 text-gray-500">
        {loading ? "Loading brands..." : `TOTAL ${Object.values(brandGroups).flat().length} brands`}
      </p>

      {!loading && (
        <section className="mt-8 space-y-8">
          {Object.entries(brandGroups).map(([letter, brands]) => (
            <div key={letter} className="grid grid-cols-1 gap-4 border-t border-gray-200 pt-5 sm:grid-cols-[80px_1fr]">
              <h2 className="text-3xl font-bold">{letter}</h2>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <a
                    key={brand}
                    href={`#/brands?brand=${encodeURIComponent(brand)}`}
                    className={`rounded border px-4 py-2 text-center text-sm font-bold break-words hover:border-lime-500 hover:text-lime-600 ${
                      selectedBrand === brand ? "border-lime-500 bg-lime-50 text-lime-700" : "border-gray-200"
                    }`}
                  >
                    {brand}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {selectedBrand && (
        <section className="mt-12">
          <h2 className="break-words text-2xl font-bold">{selectedBrand}</h2>
          <p className="mt-2 text-gray-500">TOTAL {brandProducts.length} items</p>

          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {brandProducts.map((product) => (
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
        </section>
      )}
    </main>
  );
}

export default BrandPage;
