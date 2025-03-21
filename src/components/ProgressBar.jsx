import React from "react";
const THRESHOLD = 1000;
import { FREE_GIFT } from "../../data";

const ProgressBar = ({ subtotal }) => {
  const progress = Math.min((subtotal / THRESHOLD) * 100, 100);
  return (
    <div className="progress-bar">
      {subtotal >= THRESHOLD && (
        <>
          <h2 style={{textAlign:"left"}}>Free Gift For You Claim Now</h2>
          <div className="cart-item-info">
            {FREE_GIFT.name} - ${FREE_GIFT.price} x 1
            <img src={FREE_GIFT.url} style={{ width: 20, marginLeft: 5 }} alt="Free Gift" />
          </div>
        </>
      )}
      <p style={{ textAlign: "left" }}>
        {subtotal >= THRESHOLD
          ? "You unlocked a free gift!"
          : `Spend $${THRESHOLD - subtotal} more to get a free gift!`}
      </p>
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
export default ProgressBar;
