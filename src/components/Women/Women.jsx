import React from "react";
import { Link } from "react-router-dom";
import "../Men/Men.css"; // Reusing the same CSS
import products from "../Product/Product";

const Women = () => {
  const womenProducts = products.filter((product) => product.userTarget === "Women");

  return (
    <div className="men-page">
      <header>
        <h1>Women's Collection</h1>
      </header>

      <main>
        <p>Browse our exclusive women's collection below.</p>
        <div className="product-grid">
          {womenProducts.map((product, index) => (
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

export default Women;
