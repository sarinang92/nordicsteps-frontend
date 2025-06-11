import React, { useEffect, useState } from 'react';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:8080/api/orders/user/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch orders');
        return response.json();
      })
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, [userId]);

  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      <div className="orders-list">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order.orderId} className="order-card">
              <p><strong>Order #:</strong> {order.orderId}</p>
              <p><strong>Date:</strong> {new Date(order.orderDate).toISOString().replace('T', ' ').split('.')[0]}</p>
              <p><strong>Total:</strong> {order.totalAmount?.toFixed(2)} NOK</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
