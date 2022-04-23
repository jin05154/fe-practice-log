import React, { useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const [rangeVal, setRangeVal] = useState(1);
  const handleMilestone = (num) => setRangeVal(num);

  return (
    <>
      <h2 className="subtitle">3. Slider</h2>
      <div className="percentage">
        <span>{rangeVal}</span>
        <span>%</span>
      </div>
      <label className="slider-wrap">
        <StyledSlider
          type="range"
          min={1}
          max={100}
          value={rangeVal}
          onChange={(e) => setRangeVal(e.target.value)}
          className="slider"
          readOnly
        />
        <div className="milestones">
          <div id="colored" />
          <div id={rangeVal >= 25 ? "colored" : null} />
          <div id={rangeVal >= 50 ? "colored" : null} />
          <div id={rangeVal >= 75 ? "colored" : null} />
          <div id={rangeVal === 100 ? "colored" : null} />
        </div>
        <div className="milestone-nums">
          <div onClick={() => handleMilestone(1)}>1%</div>
          <div onClick={() => handleMilestone(25)}>25%</div>
          <div onClick={() => handleMilestone(50)}>50%</div>
          <div onClick={() => handleMilestone(75)}>75%</div>
          <div onClick={() => handleMilestone(100)}>100%</div>
        </div>
      </label>
    </>
  );
}

const StyledSlider = styled.input`
  background: linear-gradient(
    to right,
    var(--mint-green) 0% ${(props) => props.value}%,
    var(--border-default) ${(props) => props.value}% 100%
  );
`;
