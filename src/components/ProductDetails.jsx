import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { loadAllProducts } from "../lib/products";
import { publicUrl } from "../lib/publicUrl";

function ProductDetails({ productId, onAddToCart, deliveryCountry }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    loadAllProducts()
      .then((products) => {
        const foundProduct = products.find((item) => item.id === productId);
        setProduct(foundProduct || null);
        setLoading(false);
        setAdded(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [productId]);

  function addProductToCart() {
    if (!product) return;

    onAddToCart(product, quantity);
    setAdded(true);
  }

  if (loading) {
    return (
      <main className="px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-gray-500">Loading product...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="px-4 py-8 sm:px-6 sm:py-12">
        <a href="#/products" className="text-sm text-lime-700 hover:underline">
          Back to products
        </a>
        <p className="mt-6 rounded border border-gray-200 p-6 text-gray-500">
          Product not found.
        </p>
      </main>
    );
  }

  return (
    <main className="px-4 py-8 sm:px-6 sm:py-10">
      <a href="#/products" className="text-sm text-lime-700 hover:underline">
        Back to products
      </a>

      <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-h-[300px] items-center justify-center bg-gray-50 p-4 sm:min-h-[520px] sm:p-8">
          <img
            src={publicUrl(product.image)}
            alt={product.title}
            className="max-h-[320px] w-full object-contain sm:max-h-[500px]"
          />
        </div>

        <div>
          <span className="inline-block rounded bg-lime-500 px-2 py-1 text-sm font-bold text-white">
            {product.source}
          </span>

          <h1 className="mt-4 break-words text-2xl font-bold sm:text-4xl">{product.title}</h1>
          <p className="mt-5 break-words text-base sm:mt-6 sm:text-xl">{product.text}</p>

          {product.rating && (
            <p className="mt-6 flex items-center gap-2 text-gray-500">
              <TiStarFullOutline className="text-black" />
              <span className="font-bold text-black">{product.rating}</span>
              <span>| reviews</span>
            </p>
          )}

          <div className="mt-8">
            {product.discount && (
              <p className="text-lg text-gray-400 line-through">{product.discount}</p>
            )}
            <p className="break-words text-3xl font-bold sm:text-4xl">{product.price}</p>
          </div>

          <div className="mt-8 rounded bg-gray-100 p-5">
            <p className="font-bold">Check Your Shipping Location</p>
            <p className="mt-2 break-words text-gray-600">
              Delivery country: {deliveryCountry.name} ({deliveryCountry.code})
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center border border-gray-300">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="h-12 w-12 text-xl text-gray-500"
              >
                -
              </button>
              <span className="w-14 text-center text-lg">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="h-12 w-12 text-xl"
              >
                +
              </button>
            </div>

            <span className="text-gray-600">Selling Fast</span>
          </div>

          <button
            type="button"
            onClick={addProductToCart}
            className="mt-10 flex min-h-14 w-full flex-wrap items-center justify-center gap-2 rounded bg-black px-4 py-3 text-center text-base font-bold leading-tight text-white hover:bg-gray-800 sm:min-h-16 sm:text-xl"
          >
            <HiOutlineShoppingBag />
            Add to Cart - {product.price}
          </button>

          {added && (
            <p className="mt-4 rounded bg-lime-50 p-3 text-center font-bold text-lime-700">
              Added to cart.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
