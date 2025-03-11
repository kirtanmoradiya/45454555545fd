import React, { useState, useEffect, useContext } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Orders = ({ url }) => {
  const navigate = useNavigate();
  const { token, admin } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  // Optional loading state
  // const [loading, setLoading] = useState(true);

  // Fetch all orders from backend
  const fetchAllOrder = async () => {
    try {
      // setLoading(true); // If you want to show a loader
      const response = await axios.get(url + "/api/order/list", {
        headers: { token },
      });
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Failed to fetch orders.");
      }
      // setLoading(false);
    } catch (error) {
      toast.error("Error fetching orders.");
      // setLoading(false);
    }
  };

  // Handle status change for orders
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        url + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAllOrder(); // Refresh orders after update
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong updating status.");
    }
  };

  // On component mount
  useEffect(() => {
    if (!admin && !token) {
      toast.error("Please Login First");
      navigate("/");
    } else {
      fetchAllOrder();
    }
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>

      {/* Optional loader
      {loading ? (
        <p>Loading Orders...</p>
      ) : */}
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />

            <div>
              {/* Item details */}
              <p className="order-item-food">
                {order.items.map((item, idx) => (
                  <span key={idx}>
                    {item.name} x {item.quantity}
                    {idx !== order.items.length - 1 && ", "}
                  </span>
                ))}
              </p>

              {/* Customer Name */}
              <p className="order-item-name">
                {order.address.firstName} {order.address.lastName}
              </p>

              {/* Address */}
              <div className="order-item-address">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              {/* Phone */}
              <p className="order-item-phone">{order.address.phone}</p>
            </div>

            {/* Item Count */}
            <p>Items: {order.items.length}</p>

            {/* Amount */}
            <p>${order.amount}</p>

            {/* Status Dropdown with COD added */}
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="COD">Cash On Delivery</option>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      {/* } */}
    </div>
  );
};

export default Orders;
