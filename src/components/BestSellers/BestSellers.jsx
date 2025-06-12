import React from 'react';
import './BestSellers.css'; // Import the CSS for styling
import '../NewArrivals/NewArrivals.css';


const BestSellers = ({ products }) => {
  return (
    <div className="best-sellers">
      <h2>Best Sellers</h2>
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

export default BestSellers;
