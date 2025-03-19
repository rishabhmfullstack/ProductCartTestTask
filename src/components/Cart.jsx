import React from "react";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {Cart.length === 0 ? (
        <p>your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>
              {item.name}-${item.price}x {item.quantity}
            </span>
            {item.id !== 99 && (
              <>
                <button onClick={() => updateQuantity(item.id,item.quantity -1)}>-</button>
                <button onClick={() => updateQuantity(item.id,item.quantity +1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};
export default Cart;
