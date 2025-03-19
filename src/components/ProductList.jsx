import React, { useState } from "react";
import "../App.css";

const ProductList = ({ products, addToCart }) => {
  const [quanties, setQuantities] = useState({});
  const handleQuantityChange = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + amount),
    }));
  };
  return (
    <div className="product-list">
      {/* <p>Shopping cards</h2> */}
      <div className="product-head">
        <p>product</p>
        <p>price</p>
        <p>quantitiy</p>
        <p>add to cart</p>
      </div>
      {products.map((product) => (
        <div>
          <div id={product.id} className="product">
            <div className="product-info">
              
              <img src={product.url} alt={product.name} />
              <span>{product.name}</span>
            </div>

            <span>$ {product.price}</span>

            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(product.id, -1)}>
                -
              </button>
              <button onClick={() => handleQuantityChange(product.id, +1)}>
                +
              </button>
            </div>
            <div
              className="add-to-cart"
              onClick={() => addToCart(product, quanties[product.id])}
            >
              Add to cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
