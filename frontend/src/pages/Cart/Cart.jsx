import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

import { getCartItems } from "../../services/productService";

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    const fetchCart = async () => {

      try {

        const data = await getCartItems(
          user.id
        );

        setCartItems(data);

      } catch (error) {

        console.log(error);

      }
    };

    if (user) {
      fetchCart();
    }

  }, []);

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          My Cart
        </h1>

        <div className="mt-12 grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                product={item}
                setCartItems={setCartItems}
              />
            ))}

          </div>

          <CartSummary
            cartItems={cartItems}
          />

        </div>

      </section>

    </MainLayout>
  );
};

export default Cart;