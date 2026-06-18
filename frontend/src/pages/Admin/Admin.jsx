import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";

import {
  getAllOrders,
  updateOrderStatus,
} from "../../services/orderService";

const Admin = () => {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
    async () => {

      try {

        const data =
          await getAllOrders();

        setOrders(data);

      } catch (error) {

        console.log(error);

      }
    };

  const handleStatusChange =
    async (
      orderId,
      status
    ) => {

      try {

        await updateOrderStatus(
          orderId,
          status
        );

        fetchOrders();

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          Admin Dashboard 👑
        </h1>

        <p className="mt-4 text-slate-600">
          Manage Orders
        </p>

        <div className="mt-10 space-y-6">

          {orders.map(
            (order) => (

              <div
                key={order._id}
                className="bg-white p-6 rounded-2xl shadow border"
              >

                <h2 className="font-bold">
                  Order ID:
                  {" "}
                  {order._id}
                </h2>

                <p className="mt-2">
                  Total:
                  {" "}
                  ₹
                  {order.totalAmount.toLocaleString()}
                </p>

                <p>
                  Status:
                  {" "}
                  <span className="font-semibold">
                    {order.status}
                  </span>
                </p>

                <select
                  value={
                    order.status
                  }
                  onChange={
                    (e) =>
                      handleStatusChange(
                        order._id,
                        e.target.value
                      )
                  }
                  className="mt-4 border rounded-lg px-3 py-2"
                >

                  <option>
                    Pending
                  </option>

                  <option>
                    Shipped
                  </option>

                  <option>
                    Delivered
                  </option>

                </select>

              </div>

            )
          )}

        </div>

      </div>

    </MainLayout>
  );
};

export default Admin;