import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

export default function CartPage() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('userId') !== null;

   // Cart items and checkout form state
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    zip: '',
    delivery: 'pickup',
    payment: 'klarna',
  });

  // Calculations for summary
  const subtotal = cartItems.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
  const vat = +(subtotal * 0.25).toFixed(2);
  const deliveryFee =
    form.delivery === 'express' ? 149 :
    form.delivery === 'standard' ? 49 : 0;
  const total = subtotal + deliveryFee;

   // Handle input changes 
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Update item quantity
  const updateQuantity = (id, qty) => {
    setCartItems(items =>
      items.map(item =>
        item.cartItemId === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    fetch(`http://localhost:8080/api/v1/cart/items/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setCartItems(items => items.filter(item => item.cartItemId !== id));
    });
  };

  // Place the order
  const placeOrder = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    const orderRequest = {
      shippingAddress: form.address,
      deliveryMethod: form.delivery,
      paymentMethod: form.payment,
      discountCode: null
    };

    fetch(`http://localhost:8080/api/orders/checkout/${userId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderRequest)
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to place order');
        return response.json();
      })
      .then(data => {
        alert(`Order placed! Order ID: ${data.orderId}`);
        navigate('/orders');
      })
      .catch(error => {
        console.error('Error placing order:', error);
        alert('Failed to place order.');
      });
  };

  // Load user info and cart items 
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    // Load user info
    fetch(`http://localhost:8080/api/v1/users/${userId}`)
      .then(res => res.json())
      .then(user => {
        setForm(prev => ({
          ...prev,
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          address: user.address || '',
          phone: user.phoneNumber || '',
          zip: user.postalCode || '',
        }));
      });

    // Load cart items
    fetch('http://localhost:8080/api/v1/cart/items')
      .then(res => res.json())
      .then(data => {
        setCartItems(data);
      })
      .catch(err => console.error('Cart fetch failed:', err));
  }, []);

  return (
    <div className="checkout-page">
      <h2>Your Cart</h2>

      <div className="cart-section">
        {cartItems.map(item => (
          <div key={item.cartItemId} className="cart-item">
            <img src={item.productImageUrl || 'https://via.placeholder.com/100'} alt={item.productName} />
            <div className="item-details">
              <p><strong>{item.productName}</strong></p>
              <p>Size: {item.size}</p>
              <p><span className="new-price">{item.productCurrentPrice},-</span></p>
            </div>
            <div className="qty-remove">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.cartItemId, parseInt(e.target.value))}
              />
              <button className="remove-button" onClick={() => removeItem(item.cartItemId)}>✖</button>
            </div>
          </div>
        ))}
        <div className="summary">
          <p>Subtotal: {subtotal},-</p>
          <p>VAT: {vat},-</p>
          <p>Delivery: {deliveryFee},-</p>
          <p><strong>Total: {total},-</strong></p>
        </div>
      </div>

      {!isLoggedIn ? (
        <div className="mode-toggle">
          <button
            type="button"
            className="checkout-button"
            onClick={() => navigate('/login', { state: { from: '/cart' } })}
          >
            Login to Checkout
          </button>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={placeOrder}>
          <h2>Your Information</h2>
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          <input type="text" name="zip" placeholder="Postcode" value={form.zip} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />

          <h2>Delivery</h2>
          <label><input type="radio" name="delivery" value="pickup" checked={form.delivery === 'pickup'} onChange={handleChange} /> Pick up at warehouse (Free)</label>
          <label><input type="radio" name="delivery" value="standard" checked={form.delivery === 'standard'} onChange={handleChange} /> Standard Delivery (49 NOK)</label>
          <label><input type="radio" name="delivery" value="express" checked={form.delivery === 'express'} onChange={handleChange} /> Express delivery (149 NOK)</label>

          <h2>Payment Method</h2>
          <label><input type="radio" name="payment" value="klarna" checked={form.payment === 'klarna'} onChange={handleChange} /> Klarna</label>
          <label><input type="radio" name="payment" value="card" checked={form.payment === 'card'} onChange={handleChange} /> Credit / Debit Card</label>
          <label><input type="radio" name="payment" value="vipps" checked={form.payment === 'vipps'} onChange={handleChange} /> Vipps</label>

          <button type="submit" className="checkout-button">Pay for the order</button>
        </form>
      )}
    </div>
  );
}
