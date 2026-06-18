import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { addToCart }
from "../../services/productService";
 

import {
  getWishlist,
  removeWishlistItem,
} from "../../services/wishlistService";

import toast from "react-hot-toast";
const Wishlist = () => {
   

  const [wishlistItems,
    setWishlistItems] =
      useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    fetchWishlist();

  }, []);

  const fetchWishlist =
    async () => {

      try {

        const data =
          await getWishlist(
            user.id
          );

        setWishlistItems(
          data
        );

      } catch (error) {

        console.log(error);

      }
    };

  const handleRemove =
    async (id) => {

      try {

        const data =
          await removeWishlistItem(
            id
          );

        toast.success(
          data.message
        );

        setWishlistItems(
          (prev) =>
            prev.filter(
              (item) =>
                item._id !== id
            )
        );

      } catch (error) {

        toast.error(
          "Failed To Remove"
        );

      }
    };


    const handleAddToCart =
  async (item) => {

    try {

      const data =
        await addToCart({
          userId: user.id,
          productId:
            item.productId,
          name: item.name,
          price: item.price,
          image: item.image,
        });

      toast.success(
        data.message
      );

    } catch (error) {

      console.log(error);

      toast.error(
        "Failed To Add Cart"
      );

    }
};

  return (
    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          My Wishlist ❤️
        </h1>
{wishlistItems.length === 0 ? (

  <div className="mt-10 bg-white rounded-3xl p-10 text-center shadow">

    <h2 className="text-2xl font-bold">
      Your Wishlist is Empty ❤️
    </h2>

    <p className="mt-3 text-slate-500">
      Save products here for later.
    </p>

  </div>

) : (

  <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {wishlistItems.map((item) => (

      <div
        key={item._id}
        className="bg-white rounded-3xl p-6 shadow border"
      >

        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full object-contain"
        />

        <h2 className="mt-4 text-xl font-bold">
          {item.name}
        </h2>

        <p className="mt-2 text-blue-600 font-bold">
          {item.price}
        </p>

        <button
          onClick={() => handleAddToCart(item)}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          🛒 Add To Cart
        </button>

        <button
          onClick={() => handleRemove(item._id)}
          className="mt-4 w-full bg-red-500 text-white py-3 rounded-xl"
        >
          Remove
        </button>

      </div>

    ))}

  </div>

)}
      </div>

    </MainLayout>
  );
};

export default Wishlist;