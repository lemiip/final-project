import { useEffect, useMemo, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuBoxes, LuPackageSearch, LuTags, LuUserRound } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { loadAllProducts, productDetailsUrl } from "../lib/products";
import { publicUrl } from "../lib/publicUrl";

function parsePrice(price) {
  const value = String(price || "").replace(/[^0-9.]/g, "");
  return Number(value) || 0;
}

function money(value) {
  return `$${value.toFixed(2)}`;
}

function StatBox({ icon, label, value }) {
  return (
    <div className="rounded border border-gray-200 bg-white p-5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-lime-50 text-2xl text-lime-700">
        {icon}
      </div>
      <p className="text-sm font-bold text-gray-500">{label}</p>
      <p className="mt-1 break-words text-2xl font-bold">{value}</p>
    </div>
  );
}

function AdminPanel({ currentUser, cart = [] }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("All");

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

  const sources = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.source).filter(Boolean))];
  }, [products]);

  const stats = useMemo(() => {
    const brandCount = new Set(products.map((product) => product.brand).filter(Boolean)).size;
    const saleCount = products.filter((product) => product.discount).length;
    const cartValue = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

    return {
      brandCount,
      saleCount,
      cartValue,
      productCount: products.length,
    };
  }, [products, cart]);

  const filteredProducts = useMemo(() => {
    const cleanSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSource = sourceFilter === "All" || product.source === sourceFilter;
      const matchesSearch = cleanSearch
        ? [product.title, product.brand, product.source, product.category, product.skin]
            .join(" ")
            .toLowerCase()
            .includes(cleanSearch)
        : true;

      return matchesSource && matchesSearch;
    });
  }, [products, search, sourceFilter]);

  return (
    <main className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a href="#/" className="text-sm font-bold text-lime-700 hover:underline">
              Back to home
            </a>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Admin Panel</h1>
            <p className="mt-2 text-gray-500">
              Manage the storefront catalog and check the current cart status.
            </p>
          </div>

          <div className="rounded border border-gray-200 bg-white px-4 py-3">
            <p className="text-sm font-bold text-gray-500">Signed in as</p>
            <p className="mt-1 font-bold">{currentUser ? currentUser.name : "Guest admin"}</p>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatBox icon={<LuBoxes />} label="Products" value={loading ? "..." : stats.productCount} />
          <StatBox icon={<LuTags />} label="Brands" value={loading ? "..." : stats.brandCount} />
          <StatBox icon={<LuPackageSearch />} label="Sale Items" value={loading ? "..." : stats.saleCount} />
          <StatBox icon={<HiOutlineShoppingBag />} label="Cart Value" value={money(stats.cartValue)} />
        </section>

        <section className="mt-8 rounded border border-gray-200 bg-white">
          <div className="flex flex-col gap-4 border-b border-gray-200 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold">Catalog</h2>
              <p className="mt-1 text-sm text-gray-500">
                {loading ? "Loading products..." : `${filteredProducts.length} products shown`}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,260px)_180px]">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products"
                className="h-11 rounded border border-gray-300 px-3 outline-none focus:border-lime-500"
              />
              <select
                value={sourceFilter}
                onChange={(event) => setSourceFilter(event.target.value)}
                className="h-11 rounded border border-gray-300 px-3 outline-none focus:border-lime-500"
              >
                {sources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {!loading && products.length === 0 && (
            <p className="p-6 text-gray-500">Products could not be loaded.</p>
          )}

          {!loading && products.length > 0 && filteredProducts.length === 0 && (
            <p className="p-6 text-gray-500">No products match this filter.</p>
          )}

          {filteredProducts.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-4 py-3">Product</th>
                    <th className="px-4 py-3">Source</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Rating</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-t border-gray-200 align-middle">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={publicUrl(product.image)}
                            alt={product.title}
                            className="h-16 w-16 rounded border border-gray-200 bg-gray-50 object-contain"
                          />
                          <div className="min-w-0">
                            <p className="font-bold">{product.title}</p>
                            <p className="mt-1 text-gray-500">{product.brand}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">{product.source}</td>
                      <td className="px-4 py-4">{product.category || "General"}</td>
                      <td className="px-4 py-4 font-bold text-red-500">{product.price || "No price"}</td>
                      <td className="px-4 py-4">
                        {product.rating ? (
                          <span className="inline-flex items-center gap-1 text-gray-600">
                            <TiStarFullOutline className="text-lime-600" />
                            {product.rating}
                          </span>
                        ) : (
                          "No rating"
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <a
                          href={productDetailsUrl(product.id)}
                          className="rounded bg-black px-3 py-2 font-bold text-white hover:bg-lime-600"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="text-xl font-bold">Quick Actions</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#/products" className="rounded border border-gray-300 px-4 py-2 font-bold hover:border-lime-500 hover:text-lime-700">
                Open Catalog
              </a>
              <a href="#/brands" className="rounded border border-gray-300 px-4 py-2 font-bold hover:border-lime-500 hover:text-lime-700">
                Open Brands
              </a>
              <a href="#/sale" className="rounded border border-gray-300 px-4 py-2 font-bold hover:border-lime-500 hover:text-lime-700">
                Check Sale
              </a>
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <div className="mb-4 flex items-center gap-2">
              <LuUserRound className="text-xl text-lime-700" />
              <h2 className="text-xl font-bold">Current Cart</h2>
            </div>
            <p className="text-gray-500">
              {cart.length === 0
                ? "No items in the cart."
                : `${cart.length} cart rows, total ${money(stats.cartValue)}`}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminPanel;
