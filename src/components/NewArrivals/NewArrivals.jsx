import React from 'react';
import './NewArrivals.css'; // Import the CSS for styling

const NewArrivals = ({ products }) => {
  return (
    <div className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={index} className="product-box">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
