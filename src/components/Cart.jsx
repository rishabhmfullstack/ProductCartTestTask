import React from "react";

const TAX_RATE = 0.10; // 10% Tax

const Cart = ({ cart, updateQuantity, removeFromCart }) => {

  const sortedCart = [...cart].sort((a, b) => (a.id === 99 ? 1 : b.id === 99 ? -1 : 0));
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {sortedCart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.url} alt={item.name} style={{ width: 50, height: 50, marginRight: 10 }} />
                {item.name} - ${item.price} x {item.quantity}
              </div>
              {item.id !== 99 && (
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              )}
            </div>
          ))}

          <div className="cart-total">
            <h3>Order Summary</h3>
            <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
            <p style={{borderBottom:"1px solid gray", paddingBottom:"20px"}}><strong>Tax (10%):</strong> ${tax.toFixed(2)}</p>
            <p><strong>Total Bill:</strong> ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
