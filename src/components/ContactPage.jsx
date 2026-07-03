import { useState } from "react";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="mx-auto max-w-[760px] px-4 py-10 sm:px-6 sm:py-14">
      <a href="#/" className="text-sm text-lime-700 hover:underline">
        Back to home
      </a>

      <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Contact Us</h1>
      <p className="mt-3 text-gray-500">
        Send us a message about your order, delivery, payment, or product question.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block font-bold" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-bold" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
              placeholder="you@mail.com"
              type="email"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-bold" htmlFor="contact-topic">
            Topic
          </label>
          <select
            id="contact-topic"
            className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
          >
            <option>Order question</option>
            <option>Delivery</option>
            <option>Payment</option>
            <option>Product question</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-bold" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className="min-h-[150px] w-full rounded border border-gray-300 px-4 py-3 outline-none focus:border-lime-500"
            placeholder="Write your message..."
            required
          />
        </div>

        <button
          type="submit"
          className="h-12 w-full rounded bg-black font-bold text-white hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>

      {sent && (
        <p className="mt-5 rounded bg-lime-50 p-4 font-bold text-lime-700">
          Your message has been sent.
        </p>
      )}
    </main>
  );
}

export default ContactPage;
