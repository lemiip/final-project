const faqs = [
  {
    question: "How can I track my order?",
    answer: "After confirming an order, you can check the cart page and order information in your profile.",
  },
  {
    question: "Can I change my delivery country?",
    answer: "Yes. Click the country icon in the navbar and choose a delivery country.",
  },
  {
    question: "Is shipping free?",
    answer: "In this project, shipping is shown as free in the order preview.",
  },
  {
    question: "Can I save products in my cart?",
    answer: "Yes. The cart is saved in localStorage, and each logged-in user has a separate cart.",
  },
]

function FaqPage() {
  return (
    <main className="mx-auto max-w-[850px] px-4 py-10 sm:px-6 sm:py-14">
      <a href="#/" className="text-sm text-lime-700 hover:underline">
        Back to home
      </a>

      <h1 className="mt-5 text-3xl font-bold sm:text-4xl">FAQs</h1>
      <p className="mt-3 text-gray-500">
        Quick answers about orders, delivery, and your cart.
      </p>

      <div className="mt-10 space-y-4">
        {faqs.map((item) => (
          <details key={item.question} className="rounded border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold">{item.question}</summary>
            <p className="mt-4 text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </main>
  )
}

export default FaqPage
