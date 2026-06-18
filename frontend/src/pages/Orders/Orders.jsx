 import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getUserOrders } from "../../services/orderService";

const Orders = () => {

  const [orders, setOrders] =
    useState([]);

const [loading, setLoading] =
  useState(true);
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    const fetchOrders =
      async () => {

        try {

          const data =
            await getUserOrders(
              user.id
            );

          setOrders(data);

        } catch (error) {

          console.log(error);

        }
        finally {

  setLoading(false);

}
      };

    if (user) {
      fetchOrders();
    }

  }, []);

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          My Orders
        </h1>

        <div className="mt-10 space-y-6">

          {loading ? (

  <h2 className="text-center">
    Loading Orders...
  </h2>

) : orders.length === 0 ? (

            <h2 className="text-2xl font-bold text-center">
  No Orders Yet 📦
</h2>

          ) : (

            orders.map((order) => (

              <div
                key={order._id}
                className="bg-white rounded-3xl p-6 shadow border"
              >

                 <div className="flex justify-between">

  <h2 className="font-bold text-xl">
    Order #{order._id.slice(-6)}
  </h2>

  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
    {order.status}
  </span>

</div>

                <p className="mt-2 text-slate-500">
  Ordered On:
  {" "}
  {new Date(
    order.createdAt
  ).toLocaleDateString()}
</p>

                <div className="mt-4">

                  {order.items.map(
                    (item) => (

                      <div
                        key={item._id}
                        className="flex justify-between py-2"
                      >

                        <span>
                          {item.name}
                        </span>

                        <span>
                          Qty:
                          {item.quantity}
                        </span>

                      </div>

                    )
                  )}

                </div>

                <div className="mt-4 text-right font-bold text-lg">

                  ₹
                  {order.totalAmount.toLocaleString()}

                </div>

              </div>

            ))

          )}

        </div>

      </section>

    </MainLayout>
  );
};

export default Orders;