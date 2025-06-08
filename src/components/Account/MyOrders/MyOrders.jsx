import React from 'react';
import './MyOrders.css';

const MyOrders = () => {
  const orders = [
    { id: 'ORD12345', date: '2025-06-05', total: 1299.00 },
    { id: 'ORD12346', date: '2025-05-22', total: 749.50 },
    { id: 'ORD12347', date: '2025-04-18', total: 1899.00 },
  ];

  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <p><strong>Order #:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> {order.total.toFixed(2)} NOK</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
