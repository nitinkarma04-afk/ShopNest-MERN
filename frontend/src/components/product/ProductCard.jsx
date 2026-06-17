 import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-2xl transition duration-300 cursor-pointer">

        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-contain bg-slate-50 p-4 transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">

          <h3 className="text-xl font-semibold text-slate-900">
            {product.name}
          </h3>

          <p className="mt-2 text-blue-600 font-bold">
            {product.price}
          </p>

          <button className="mt-5 w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-black transition">
            View Details
          </button>

        </div>

      </div>
    </Link>
  );
};

export default ProductCard;