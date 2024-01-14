// src/components/OrderHistory.js
import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  // Assume you have an authenticated user and orders data
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Fetch user's order history from your backend or API
    // Update setUserOrders with the retrieved data
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch('http://your-backend-api/order-history', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${"uejwnwemsdbfsdm"}`, //
          },
        });

        if (response.ok) {
          const ordersData = await response.json();
          setUserOrders(ordersData);
        } else {
          console.error('Failed to fetch order history');
        }
      } catch (error) {
        console.error('Error during order history fetch:', error.message);
      }
    };

    fetchOrderHistory();
  }, []); 

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Order History</h1>
      </div>

      {userOrders.length > 0 ? (
        <div>
          {userOrders.map((order) => (
            <div key={order.orderId} className="border p-4 mb-4">
              <h2 className="text-xl font-bold mb-2">Order ID: {order.orderId}</h2>
              <p>Date: {order.orderDate}</p>
              <p>Plan: {order.planName}</p>
              <p>Total Amount: {order.totalAmount}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
