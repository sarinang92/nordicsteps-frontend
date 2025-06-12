import React from "react";
import { Link } from "react-router-dom";
import "./Men.css";
import products from "../Product/Product"; 

const Men = () => {
  const menProducts = products.filter((product) => product.userTarget === "Men");

  return (
    <div className="men-page">
      <header>
        <h1>Men's Collection</h1>
      </header>

      <main>
        <p>Browse our exclusive men's collection below.</p>
        <div className="product-grid">
          {menProducts.map((product, index) => (
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

export default Men;
