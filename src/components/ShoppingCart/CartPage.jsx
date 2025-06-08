import React, { useState } from 'react';
import './CartPage.css';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Nike Air Max 270', price: 1199, originalPrice: 1499, quantity: 1, size: 'EU 42', image: 'https://via.placeholder.com/100?text=Nike+Air+Max+270' },
    { id: 2, name: 'Adidas Ultraboost 22', price: 1349, originalPrice: 1599, quantity: 1, size: 'EU 44', image: 'https://via.placeholder.com/100?text=Ultraboost+22' },
    { id: 3, name: 'Asics Gel-Kayano 29', price: 1299, originalPrice: 1499, quantity: 1, size: 'EU 41', image: 'https://via.placeholder.com/100?text=Gel-Kayano+29' }
  ]);

  const [mode, setMode] = useState(null); // 'guest' or 'member'
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    zip: '',
    delivery: 'pickup',
    payment: 'klarna',
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = +(subtotal * 0.25).toFixed(2);
  const deliveryFee = form.delivery === 'home' ? 149 : form.delivery === 'pickupPoint' ? 49 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateQuantity = (id, qty) => {
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: Math.max(1, qty) } : item));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleLogin = () => {
    if (form.email === 'user@example.com' && form.password === '1234') {
      setForm(prev => ({
        ...prev,
        firstName: 'Jane',
        lastName: 'Doe',
        address: '123 Sample Street',
        phone: '12345678',
        zip: '0123',
      }));
    } else {
      alert('Invalid login (simulated)');
    }
  };

  const placeOrder = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-page">
      <h2>Your Cart</h2>

      {/* Cart Summary */}
      <div className="cart-section">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <p><strong>{item.name}</strong></p>
              <p>Size: {item.size}</p>
              <p>
                {item.originalPrice && <span className="old-price">{item.originalPrice},-</span>}
                <span className="new-price">{item.price},-</span>
              </p>
            </div>
            <div className="qty-remove">
              <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} />
              <button className="remove-button" onClick={() => removeItem(item.id)}>✖</button>
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

      {/* User Mode Selection */}
      {!mode && (
        <div className="mode-toggle">
          <h3>Proceed as:</h3>
          <button type="button" onClick={() => setMode('member')}>I have an account</button>
          <button type="button" onClick={() => setMode('guest')}>Guest Checkout</button>
        </div>
      )}

      {/* Checkout Form */}
      {mode && (
        <form className="checkout-form" onSubmit={placeOrder}>
          <h2>Your Information</h2>

          {mode === 'member' ? (
            <>
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
              <button type="button" onClick={handleLogin} className="checkout-button">Log In & Prefill</button>
            </>
          ) : null}

          {mode === 'guest' || (mode === 'member' && form.firstName) ? (
            <>
              <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
              <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
              <input type="text" name="zip" placeholder="Postcode" value={form.zip} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
            </>
          ) : null}

          <h2>Delivery</h2>
          <label><input type="radio" name="delivery" value="pickup" checked={form.delivery === 'pickup'} onChange={handleChange} /> Pick up at warehouse (Free)</label>
          <label><input type="radio" name="delivery" value="pickupPoint" checked={form.delivery === 'pickupPoint'} onChange={handleChange} /> Pickup point (49 NOK)</label>
          <label><input type="radio" name="delivery" value="home" checked={form.delivery === 'home'} onChange={handleChange} /> Home delivery (149 NOK)</label>

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
