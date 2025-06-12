import React from "react";
import { Link } from "react-router-dom";
import "../Men/Men.css"; // Reuse shared styles
import products from "../Product/Product"; // Full product list

const Kids = () => {
  const kidsProducts = products.filter((product) => product.userTarget === "Kids");

  return (
    <div className="men-page">
      <header>
        <h1>Kids' Collection</h1>
      </header>

      <main>
        <p>Explore durable and fun shoes made just for kids.</p>
        <div className="product-grid">
          {kidsProducts.map((product, index) => (
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
                  {product.isOnSale && product.currentPrice ? (
                    <>
                      <span style={{ textDecoration: "line-through", color: "gray", marginRight: "8px" }}>
                        ${product.price.toFixed(2)}
                      </span>
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        ${product.currentPrice.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span>${product.price.toFixed(2)}</span>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Kids;
