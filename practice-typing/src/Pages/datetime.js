import React, { useState, useEffect } from "react";
import "../index.css";
function DataTime() {
  const img1 = "http://placeimg.com/640/360/any";
  const img2 = "http://placeimg.com/642/362/any";
  const img3 = "http://placeimg.com/644/364/any";
  const [time, setTime] = useState(new Date());
  const myName = "CAT";
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h1 className="heading">Current Time</h1>
        <h2 style={{textAlign:"center"}}>my name is {myName}</h2>
      <div className="img_div">
        <img src={img1} alt="newImageUpload" />
        <br />

        <img src={img2} />
        <br />

        <img src={img3} />
        <br />

      </div>
        <p  style={{textAlign:"center"}}>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default DataTime;
