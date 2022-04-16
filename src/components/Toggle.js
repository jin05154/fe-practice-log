import React, { useState } from "react";

export default function Toggle() {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <h2 className="subtitle">1. Toggle</h2>
      <div className="toggle-wrap">
        <div className="toggle-slider">
          <div
            className={toggled ? "toggle-default" : "toggle-selected"}
            onClick={() => setToggled(false)}
          >
            기본
          </div>
          <div
            className={toggled ? "toggle-selected" : "toggle-default"}
            onClick={() => setToggled(true)}
          >
            상세
          </div>
        </div>
      </div>
      <p>선택된 항목은 " {toggled ? "상세" : "기본"} "</p>
    </>
  );
}
