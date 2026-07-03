import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { fetchPublicJson, publicUrl } from "../lib/publicUrl";
import { productDetailsUrl } from "../lib/products";

function Unove({ onAddToCart }) {
    const [unove, setUnove] = useState([]);

    useEffect(() => {
        fetchPublicJson("/unove/unove.json")
            .then((data) => setUnove(data))
            .catch(() => setUnove([]));
    }, []);

    function getProductPayload(brand, product) {
        return {
            id: `${brand.title}-${product.id}`,
            source: brand.title,
            brand: brand.title,
            title: product.name,
            text: product.name,
            image: product.image,
            discount: product.discount,
            price: product.price,
        };
    }

    return (
        <div>
            {unove.map((brand) => (
                <div key={brand.id} className="bg-gray-100 p-4 sm:p-8 mt-6">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-10 mx-0 sm:mx-2 mt-5">
                        {brand.title}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mx-0 sm:mx-3 lg:h-[420px]">
                        <div className="w-full overflow-hidden bg-black aspect-video lg:aspect-auto lg:h-full">
                            <video
                                src={publicUrl(brand.video)}
                                controls
                                playsInline
                                preload="metadata"
                                className="block w-full h-full object-cover"
                            />
                        </div>

                        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto lg:h-full">
                            {brand.products.map((product) => {
                                const detailsUrl = productDetailsUrl(`${brand.title}-${product.id}`);
                                const cartProduct = getProductPayload(brand, product);

                                return (
                                    <div
                                        key={product.id}
                                        className="bg-white overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col"
                                    >
                                        <a
                                            href={detailsUrl}
                                            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2"
                                        >
                                            <img
                                                src={publicUrl(product.image)}
                                                alt={product.name}
                                                className="w-full h-[180px] object-contain bg-gray-50 lg:object-cover lg:bg-transparent cursor-pointer"
                                            />
                                        </a>

                                        <div className="flex-1 flex flex-col justify-between p-3">
                                            <div className="flex items-start justify-between gap-3">
                                                <a
                                                    href={detailsUrl}
                                                    className="font-medium line-clamp-2 hover:underline break-words flex-1 min-w-0"
                                                >
                                                    {product.name}
                                                </a>
                                                <button
                                                    type="button"
                                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-500 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                                                    aria-label="Add to cart"
                                                    title="Add to cart"
                                                    onClick={() => onAddToCart(cartProduct)}
                                                >
                                                    <HiOutlineShoppingBag />
                                                </button>
                                            </div>

                                            <div className="mt-4">
                                                <p className="text-gray-400 line-through">{product.discount}</p>
                                                <p className="text-red-500 font-bold text-xl mt-3 break-words">{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Unove;
