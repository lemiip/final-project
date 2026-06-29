import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { publicUrl } from "../lib/publicUrl";

function priceToNumber(price) {
  const match = String(price || "").replaceAll(",", "").match(/US\$(\d+(\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function money(value) {
  return `US$${value.toFixed(2)}`;
}

function CartPage({ cart, updateQuantity, removeFromCart, clearCart }) {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + priceToNumber(item.price) * item.quantity,
    0
  );

  function confirmOrder() {
    if (cart.length === 0) return;

    clearCart();
    setOrderConfirmed(true);
  }

  return (
    <main className="px-6 py-12">
      <h1 className="mb-10 text-3xl font-bold">Cart</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_405px]">
        <section>
          {cart.length === 0 ? (
            <div className="flex min-h-[330px] flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-5xl text-gray-400">
                <HiOutlineShoppingBag />
              </div>
              <p className="text-gray-500">Your cart is empty.</p>
              <a
                href="#/products"
                className="mt-8 flex h-[54px] w-full max-w-[450px] items-center justify-center rounded border border-black font-bold hover:bg-gray-100"
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[110px_1fr] gap-5 border-b border-gray-200 pb-5"
                >
                  <img
                    src={publicUrl(item.image)}
                    alt={item.title}
                    className="h-[110px] w-[110px] object-cover"
                  />

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold text-lime-700">{item.source}</p>
                        <h2 className="mt-1 font-bold">{item.title}</h2>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-600">{item.text}</p>
                      </div>

                      <button
                        className="text-sm text-gray-500 underline"
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xl font-bold text-red-500">{item.price}</p>

                      <div className="flex items-center border border-gray-300">
                        <button
                          className="h-9 w-9 text-xl"
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <button
                          className="h-9 w-9 text-xl"
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <aside>
          <section className="border border-gray-200 p-8">
            <h2 className="mb-10 text-center text-2xl font-bold">Order Preview</h2>

            <div className="space-y-5 text-gray-600">
              <div className="flex justify-between font-bold text-gray-700">
                <span>Subtotal</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Items Value</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Discount</span>
                <span>-US$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Shipping</span>
                <span className="font-bold">FREE</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Estimated Duties</span>
                <span className="text-red-500">Charged at customs</span>
              </div>
            </div>

            <div className="mt-8 border-t border-dashed border-gray-300 pt-5">
              <div className="flex justify-between text-xl font-bold">
                <span>
                  Estimated Total
                  <span className="block text-base font-normal">({totalItems} items)</span>
                </span>
                <span>{money(subtotal)}</span>
              </div>
            </div>

            <button
              className={`mt-8 h-14 w-full rounded font-bold ${
                cart.length === 0 ? "bg-gray-300 text-gray-500" : "bg-black text-white"
              }`}
              type="button"
              onClick={confirmOrder}
              disabled={cart.length === 0}
            >
              Confirm Order
            </button>

            {orderConfirmed && (
              <p className="mt-4 text-center font-bold text-lime-600">
                Your order has been confirmed.
              </p>
            )}
          </section>
        </aside>
      </div>
    </main>
  );
}

export default CartPage;
