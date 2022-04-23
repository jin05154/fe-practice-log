import React, { useState } from "react";
import styled from "styled-components";

export default function Tab() {
  const [clicked, setClicked] = useState(0);
  const onClickFirst = () => setClicked(0);
  const onClickSecond = () => setClicked(1);
  const onClickThird = () => setClicked(2);

  return (
    <>
      <h2 className="subtitle">2. Tab</h2>
      <div className="tabs">
        <div
          className={clicked === 0 ? "tab-selected" : "tab-default"}
          onClick={onClickFirst}
        >
          감자
        </div>
        <div
          className={clicked === 1 ? "tab-selected" : "tab-default"}
          onClick={onClickSecond}
        >
          고구마
        </div>
        <div
          className={clicked === 2 ? "tab-selected" : "tab-default"}
          onClick={onClickThird}
        >
          카레라이스
        </div>
      </div>
      <div className="tab-slider">
        <Slider clicked={clicked} />
      </div>
    </>
  );
}

const Slider = styled.div`
  width: 180px;
  height: 3px;
  background: var(--mint-green);
  z-index: 9999;
  transform: translateX(calc(${(props) => props.clicked} * 180px));
  transition: 0.3s;
`;
