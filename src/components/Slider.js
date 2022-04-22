import React, { useState, useEffect, useRef } from "react";

export default function Slider() {
  const [startPosition, setStartPosition] = useState(0);
  const [newPosition, setNewPosition] = useState(0);
  const slider = useRef();
  const getStartPosition = () => setStartPosition(slider.current.offsetLeft);

  useEffect(() => {
    getStartPosition();
    console.log(startPosition);
  }, [startPosition]);

  useEffect(() => {
    // 윈도우 크기 변경 시 startPosition 재계산
    window.addEventListener("resize", getStartPosition);
  });

  return (
    <>
      <h2 className="subtitle">3. Slider</h2>
      <div className="percentage">
        <span>100</span>
        <span>%</span>
      </div>
      <div className="slider">
        <div className="inner-slider" ref={slider} draggable="true"></div>
        <div className="slider-outline"></div>
        <div className="milestones">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="milestone-nums">
          <div>1%</div>
          <div>25%</div>
          <div>50%</div>
          <div>75%</div>
          <div>100%</div>
        </div>
      </div>
    </>
  );
}
