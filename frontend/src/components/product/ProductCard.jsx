 import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  addToWishlist,
} from "../../services/wishlistService";
const ProductCard = ({ product }) => {
  const handleWishlist =
  async (e) => {

    e.preventDefault();

    try {

      const user =
        JSON.parse(
          localStorage.getItem(
            "user"
          )
        );

      if (!user) {

        toast.error(
          "Please Login First"
        );

        return;
      }

      const data =
        await addToWishlist({
          userId: user.id,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        });

      toast.success(
        data.message
      );

    } catch (error) {

      toast.error(
        "Failed To Add Wishlist"
      );

    }
};
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-md border border-slate-100   hover:-translate-y-2 transition-all duration-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer">

        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
           className="h-64 w-full object-contain bg-gradient-to-br from-slate-50 to-slate-100 p-4 transition duration-500 group-hover:scale-105"
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
          <button
  onClick={handleWishlist}
  className="mt-3 w-full rounded-xl bg-pink-500 py-3 text-white hover:bg-pink-600 transition"
>
  ❤️ Add To Wishlist
</button>

        </div>

      </div>
    </Link>
  );
};

export default ProductCard;