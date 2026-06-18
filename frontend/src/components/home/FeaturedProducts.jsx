import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";
import { useState } from "react";

const FeaturedProducts = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
  useState("All");
const filteredProducts = products.filter(
  (product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );

    const matchesCategory =
      selectedCategory === "All" ||
      product.category ===
        selectedCategory;

    return (
      matchesSearch &&
      matchesCategory
    );
  }
);
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

     <div className="text-center">

      <h2 className="text-4xl font-bold mt-8">
   🔥 Featured Products
  </h2>

  <p className="mt-4 text-slate-600">
    Discover our most popular products
  </p>

  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="mt-8 w-full max-w-md rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none shadow-sm focus:ring-2 focus:ring-blue-500"
  />

  {/* Category Buttons */}

  <div className="flex flex-wrap justify-center gap-3 mt-6">

    {[
      "All",
      "Laptop",
      "Smartphone",
      "Audio",
      "Wearable",
    ].map((category) => (

      <button
        key={category}
        onClick={() =>
          setSelectedCategory(
            category
          )
        }
        className={`px-4 py-2 rounded-full border transition ${
          selectedCategory === category
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
            : "bg-white hover:bg-slate-100"
        }`}
      >
        {category}
      </button>

    ))}

  </div>

   
</div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default FeaturedProducts;