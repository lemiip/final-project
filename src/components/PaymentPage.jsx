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

function PaymentPage({ cart, currentUser, deliveryCountry, clearCart }) {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + priceToNumber(item.price) * item.quantity,
    0
  );

  function updateField(field, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  function submitPayment(e) {
    e.preventDefault();

    if (!currentUser) {
      setError("Please login to pay for your order.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const allFieldsFilled = Object.values(form).every((value) => value.trim());

    if (!allFieldsFilled) {
      setError("Please fill in all payment fields.");
      return;
    }

    setError("");
    clearCart();
    setPaid(true);
  }

  if (!currentUser) {
    return (
      <main className="mx-auto max-w-[620px] px-4 py-10 text-center sm:px-6 sm:py-14">
        <section className="border border-gray-200 p-6 sm:p-8">
          <h1 className="text-3xl font-bold">Login Required</h1>
          <p className="mt-4 text-gray-600">
            Please login to pay for your order.
          </p>
          <a
            href="#/login"
            className="mt-8 inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded bg-black font-bold text-white hover:bg-gray-800"
          >
            Login to Pay
          </a>
        </section>
      </main>
    );
  }

  if (paid) {
    return (
      <main className="mx-auto max-w-[620px] px-4 py-10 text-center sm:px-6 sm:py-14">
        <section className="border border-lime-200 bg-lime-50 p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-lime-800">Payment Successful</h1>
          <p className="mt-4 text-lime-700">
            Thank you, {currentUser.name}. Your order has been paid.
          </p>
          <a
            href="#/products"
            className="mt-8 inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded bg-black font-bold text-white hover:bg-gray-800"
          >
            Continue Shopping
          </a>
        </section>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="mx-auto max-w-[620px] px-4 py-10 text-center sm:px-6 sm:py-14">
        <section className="border border-gray-200 p-6 sm:p-8">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-4xl text-gray-400">
            <HiOutlineShoppingBag />
          </div>
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <a
            href="#/products"
            className="mt-8 inline-flex h-12 w-full max-w-[280px] items-center justify-center rounded border border-black font-bold hover:bg-gray-100"
          >
            Continue Shopping
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,390px)]">
        <section className="border border-gray-200 p-5 sm:p-8">
          <a href="#/cart" className="text-sm font-bold text-lime-700 hover:underline">
            Back to cart
          </a>
          <h1 className="mt-3 text-3xl font-bold">Payment</h1>
          <p className="mt-2 text-gray-500">
            Complete payment for {totalItems} items.
          </p>

          <form onSubmit={submitPayment} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-bold" htmlFor="payment-name">
                Full Name
              </label>
              <input
                id="payment-name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="payment-email">
                Email
              </label>
              <input
                id="payment-email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                type="email"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block font-bold" htmlFor="payment-address">
                Delivery Address
              </label>
              <input
                id="payment-address"
                value={form.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                placeholder={`${deliveryCountry.name}, city, street`}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block font-bold" htmlFor="payment-card">
                Card Number
              </label>
              <input
                id="payment-card"
                value={form.cardNumber}
                onChange={(e) => updateField("cardNumber", e.target.value)}
                className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                inputMode="numeric"
                maxLength="19"
                placeholder="1111 2222 3333 4444"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="payment-expiry">
                Expiry
              </label>
              <input
                id="payment-expiry"
                value={form.expiry}
                onChange={(e) => updateField("expiry", e.target.value)}
                className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                placeholder="MM/YY"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold" htmlFor="payment-cvv">
                CVV
              </label>
              <input
                id="payment-cvv"
                value={form.cvv}
                onChange={(e) => updateField("cvv", e.target.value)}
                className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                inputMode="numeric"
                maxLength="4"
                placeholder="123"
              />
            </div>

            {error && (
              <p className="rounded bg-red-50 p-3 text-sm font-bold text-red-500 sm:col-span-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="h-12 rounded bg-lime-500 font-bold text-white hover:bg-lime-600 sm:col-span-2"
            >
              Pay {money(subtotal)}
            </button>
          </form>
        </section>

        <aside className="border border-gray-200 p-5 sm:p-8">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3 border-b border-gray-100 pb-4">
                <img
                  src={publicUrl(item.image)}
                  alt={item.title}
                  className="h-16 w-16 shrink-0 rounded bg-gray-50 object-contain"
                />
                <div className="min-w-0">
                  <p className="line-clamp-2 font-bold">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
                  <p className="mt-1 font-bold text-red-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-dashed border-gray-300 pt-5 text-gray-600">
            <div className="flex justify-between gap-4">
              <span>Subtotal</span>
              <span className="font-bold">{money(subtotal)}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Shipping</span>
              <span className="font-bold">FREE</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Delivery</span>
              <span className="max-w-[55%] break-words text-right font-bold">
                {deliveryCountry.name}
              </span>
            </div>
            <div className="flex justify-between gap-4 text-xl font-bold text-black">
              <span>Total</span>
              <span>{money(subtotal)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default PaymentPage;
