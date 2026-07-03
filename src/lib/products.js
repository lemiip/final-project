import { fetchPublicJson } from "./publicUrl";

export function makeProduct(item, source, id) {
  const brand = item.brand || item.title || item.artist || source;

  return {
    id: `${source}-${item.id || id}`,
    source,
    brand: String(brand).trim(),
    title: item.title || item.artist || item.name,
    text: item.text || item.album || source,
    category: item.category || "",
    skin: item.skin || "",
    image: item.image,
    discount: item.discount,
    price: item.price,
    rating: item.rating,
  };
}

export function productDetailsUrl(productId) {
  return `#/product/${encodeURIComponent(productId)}`;
}

export async function loadAllProducts() {
  const [cards, newProducts, recommend, foryou, kpop, unove] = await Promise.all([
    fetchPublicJson("/cards/cards.json"),
    fetchPublicJson("/new/new.json"),
    fetchPublicJson("/recommend/recommend.json"),
    fetchPublicJson("/foryou/foryou.json"),
    fetchPublicJson("/kpop/kpop.json"),
    fetchPublicJson("/unove/unove.json"),
  ]);

  const unoveProducts = unove.flatMap((section) =>
    section.products.map((product) => makeProduct(product, section.title, product.id))
  );

  return [
    ...cards.map((item) => makeProduct(item, "Best Sellers", item.id)),
    ...newProducts.map((item) => makeProduct(item, "New", item.id)),
    ...recommend.map((item) => makeProduct(item, "Chosen For You", item.id)),
    ...foryou.map((item) => makeProduct(item, "Recommendations", item.id)),
    ...unoveProducts,
    ...kpop.map((item) => makeProduct(item, "K-POP", item.id)),
  ];
}
