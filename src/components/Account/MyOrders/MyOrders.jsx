import React, { useEffect, useState } from 'react';
import './MyOrders.css';

const MyOrders = () => {
  // State to store all orders
  const [orders, setOrders] = useState([]);
  // State to store the order user clicks on
  const [selectedOrder, setSelectedOrder] = useState(null);
  // Get user ID from local storage
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;

    // Fetch all orders for this user
    fetch(`http://localhost:8080/api/orders/user/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch orders');
        return response.json();
      })
      .then(data => setOrders(data))  // Save orders in state
      .catch(error => console.error('Error fetching orders:', error));
  }, [userId]);

  // When user clicks an order, fetch its details
  const handleOrderClick = (orderId) => {
    fetch(`http://localhost:8080/api/orders/${orderId}`) 
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch order details');
        return response.json();
      })
      .then(data => setSelectedOrder(data)) // Save selected order in state
      .catch(error => console.error('Error fetching order details:', error));
  };

  return (
    <div className="orders-container">
      <h2>My Orders</h2>


      {selectedOrder ? (
        <div className="order-details">
          <button onClick={() => setSelectedOrder(null)}>← Back to Orders</button>
          <h3>Order #{selectedOrder.orderId}</h3>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
          <p><strong>Total:</strong> {selectedOrder.totalAmount} NOK</p>
          <p><strong>Date:</strong> {new Date(selectedOrder.orderDate).toLocaleString()}</p>

          <h4>Items:</h4>
          <ul>
            {selectedOrder.orderItems.map(item => (
              <li key={item.orderItemId}>
                <img src={item.productImageUrl} alt={item.productName} style={{ width: 50 }} />
                {item.productName} ({item.size}) - {item.quantity} × {item.priceEach} NOK
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="orders-list">
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.orderId}
                className="order-card"
                onClick={() => handleOrderClick(order.orderId)}
              >
                <p><strong>Order #:</strong> {order.orderId}</p>
                <p><strong>Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>
                <p><strong>Total:</strong> {order.totalAmount?.toFixed(2)} NOK</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
