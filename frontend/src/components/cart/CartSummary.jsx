import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../services/orderService";

const CartSummary = ({ cartItems }) => {

 const total = cartItems.reduce(
  (acc, item) =>
    acc +
    (
      Number(
        item.price
          .toString()
          .replace("₹", "")
          .replaceAll(",", "")
      ) * item.quantity
    ),
  0
);

const navigate = useNavigate();

const user = JSON.parse(
  localStorage.getItem("user")
);

const handlePlaceOrder = async () => {
  try {
    const order = await placeOrder(user.id);
    toast.success("Order placed successfully!");
    navigate("/orders");
  } catch (error) {
    toast.error("Failed to place order.");
  }
};

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span>Items</span>
         <span>
  {
    cartItems.reduce(
      (acc, item) =>
        acc + item.quantity,
      0
    )
  }
</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>
            ₹{total.toLocaleString()}
          </span>
        </div>

      </div>

      <button
  onClick={async () => {

    try {

      const data =
        await placeOrder(
          user.id
        );

      toast.success(
        data.message
      );

      navigate("/orders");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Checkout Failed"
      );

    }

  }}
  className="mt-8 w-full rounded-xl bg-slate-900 py-4 text-white hover:bg-black transition"
>
  Proceed To Checkout
</button>

    </div>
  );
};

export default CartSummary;