import React from "react";
const THRESHOLD = 1000;

const ProgressBar = ({ subtotal }) => {
  const progress = Math.min((subtotal / THRESHOLD) * 100, 100);
  return (
    <div className="progress-bar">
        <h2>Free Gift For You Claim Now</h2>
      <p>
        {subtotal >= THRESHOLD
          ? "you unlocked a free gift"
          : `spend$${THRESHOLD - subtotal} more to get a free gift!`}
      </p>
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}>
          {" "}
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
