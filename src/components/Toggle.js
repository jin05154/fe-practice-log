import React, { useState } from "react";

export default function Toggle() {
  // toggled == 상세
  const [toggled, setToggled] = useState(false);
  const onClickDefault = () => setToggled(false);
  const onClickDetails = () => setToggled(true);
  
  return (
    <>
      <h2 className="subtitle">1. Toggle</h2>
      <label className="toggle-switch">
        <input type="checkbox" checked={toggled} />
        <span className="toggle-slider" />
      </label>
      <div className="toggle-wrap">
        <div className={toggled ? "default" : "dark"} onClick={onClickDefault}>
          기본
        </div>
        <div className={toggled ? "dark" : "default"} onClick={onClickDetails}>
          상세
        </div>
      </div>
      <p>선택된 항목은 " {toggled ? "상세" : "기본"} "</p>
    </>
  );
}
