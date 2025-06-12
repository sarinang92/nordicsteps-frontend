import React from "react";
import { Link } from "react-router-dom";
import products from "../Product/Product";
import "../Men/Men.css"; // Reuse layout styles

const Sale = () => {
  const saleProducts = products.filter(p => p.isOnSale);

  return (
    <div className="men-page">
      <header>
        <h1>Sale</h1>
      </header>

      <main>
        <p>Grab these deals before they're gone!</p>
        <div className="product-grid">
          {saleProducts.map((product, index) => (
            <Link
              to={`/product/${product.slug}`}
              key={index}
              className="product-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>
                  <span style={{ textDecoration: "line-through", color: "gray", marginRight: "8px" }}>
                    ${product.price.toFixed(2)}
                  </span>
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    ${product.currentPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sale;
