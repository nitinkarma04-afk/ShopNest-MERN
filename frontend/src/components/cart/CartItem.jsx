import toast from "react-hot-toast";
import {
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../services/productService";
import macbook from "../../assets/images/macbook.jpg";
import iphone from "../../assets/images/iphone.jpg";
import headphones from "../../assets/images/headphones.jpg";
import watch from "../../assets/images/watch.jpg";

const imageMap = {
  "macbook.jpg": macbook,
  "iphone.jpg": iphone,
  "headphones.jpg": headphones,
  "watch.jpg": watch,
};

const CartItem = ({
  product,
  setCartItems,
}) => {

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 rounded-3xl bg-white p-6 shadow-sm border border-slate-100">

      <img
        src={
          imageMap[product.image] ||
          product.image
        }
        alt={product.name}
        className="h-32 w-32 object-contain"
      />

      <div className="flex-1">

        <h3 className="text-xl font-semibold">
          {product.name}
        </h3>

        <p className="mt-2 text-blue-600 font-bold">
          ₹{product.price}
        </p>

      </div>

      <div className="flex items-center gap-3">

        <button
          onClick={async () => {

            try {

              const data =
                await decreaseQuantity(
                  product._id
                );

              setCartItems(
                (prevItems) =>
                  prevItems.map(
                    (item) =>
                      item._id ===
                      product._id
                        ? data
                        : item
                  )
              );

            } catch (error) {

              toast.error(
                "Failed To Decrease Quantity"
              );

            }

          }}
          className="h-10 w-10 rounded-full border"
        >
          -
        </button>

        <span className="font-semibold">
          {product.quantity}
        </span>

        <button
  onClick={async () => {

    try {

      const updatedItem =
        await increaseQuantity(
          product._id
        );

      setCartItems(
        (prevItems) =>
          prevItems.map((item) =>
            item._id === product._id
              ? updatedItem
              : item
          )
      );

    } catch (error) {

      console.log(error);

    }

  }}
  className="h-10 w-10 rounded-full border"
>
  +
</button>

      </div>

      <button
        onClick={async () => {

          try {

            const data =
              await removeCartItem(
                product._id
              );

            toast.success(
              data.message
            );

            setCartItems(
              (prevItems) =>
                prevItems.filter(
                  (item) =>
                    item._id !==
                    product._id
                )
            );

          } catch (error) {

            toast.error(
              "Failed To Remove Item"
            );

          }

        }}
        className="text-red-500 font-medium"
      >
        Remove
      </button>

    </div>
  );
};

export default CartItem;