import React from "react";
// import THRESHOLD from "../../data"
const THRESHOLD = 1000;

const ProgressBar =({subtotal})=>{
    const progress = Math.min((subtotal/THRESHOLD)*100,100)
    return(
        <div className="progress-bar">
<p>{subtotal >= THRESHOLD?"you unlocked a free gift":`spend$${THRESHOLD-subtotal} more to get a free gift!`}</p>
        <div className="bar">
            <div className="fill" style={{width:`${progress}%`}}> </div>

        </div>
        </div>
    )
}
export default ProgressBar