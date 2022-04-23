import React, { useState } from "react";

export default function Slider() {
  const [rangeVal, setRangeVal] = useState(1);

  return (
    <>
      <h2 className="subtitle">3. Slider</h2>
      <div className="percentage">
        <span>{rangeVal}</span>
        <span>%</span>
      </div>
      <label className="slider-wrap">
        <input
          type="range"
          min={1}
          max={100}
          value={rangeVal}
          onChange={(e) => setRangeVal(e.target.value)}
          className="slider"
          readOnly
        />
        <div className="milestone-nums">
          <div>1%</div>
          <div>25%</div>
          <div>50%</div>
          <div>75%</div>
          <div>100%</div>
        </div>
      </label>
    </>
  );
}
