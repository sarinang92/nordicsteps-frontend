import React from "react";
import { useParams } from "react-router-dom";
import products from "./Product";
import "./ProductPage.css"; 

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Product Not Found</h2>
        <p>We couldn't find the product you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="product-page" style={{ padding: "2rem" }}>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <img src={product.imageUrl} alt={product.name} className="product-image" />

        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
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

          <p style={{ maxWidth: "500px", color: "#555" }}>{product.description}</p>

          {/* Sizes */}
          <div style={{ margin: "1rem 0" }}>
            <h4>Select Size:</h4>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            style={{
              marginTop: "1rem",
              padding: "10px 20px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
