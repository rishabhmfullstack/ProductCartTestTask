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
      <h2 style={{textAlign:"left", textTransform:"capitalize", marginLeft:"20px"}}>Shopping card</h2>
      <div className="product-head">
        <p>product</p>
        <p>$price</p>
        <p>quantitiy</p>
        <p>sub total</p>

        <p>add to cart</p>
      </div>
      <div style={{padding:"0 20px"}}>
      {products.map((product) => {
        const quantity = quanties[product.id] || 1;
        const subtotal = product.price * quantity; // Calculate subtotal

        return(
        
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
              <span>{quanties[product.id] || 1}</span>
              <button onClick={() => handleQuantityChange(product.id, +1)}>
                +
              </button>
            </div>
             <span className="subtotal">$ {subtotal}</span>
            <div
              className="add-to-cart"
              onClick={() => addToCart(product, quanties[product.id])}
            >
              Add to cart
            </div>
          </div>
      )})}
      </div>
    </div>
  );
};
export default ProductList;
