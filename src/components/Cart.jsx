import React from "react";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
             <img src={item.url}></img> {item.name}-${item.price}x {item.quantity}
            </div>
            {item.id !== 99 && (
              <>
              <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(item.id,item.quantity -1)}>-</button>

              
              <button onClick={() => updateQuantity(item.id,item.quantity +1)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
               
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};
export default Cart;
