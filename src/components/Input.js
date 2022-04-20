import React, { useState } from "react";

import { ReactComponent as InvalidIcon } from "../icons/invalid.svg";
import { ReactComponent as ValidIcon } from "../icons/valid.svg";
import { ReactComponent as InvisibleIcon } from "../icons/invisible.svg";
import { ReactComponent as VisibleIcon } from "../icons/visible.svg";

export default function Input() {
  // 비밀번호 숨기기/보이기
  const [visible, setVisible] = useState(false);
  // 이메일 형식 확인
  const [valid, setValid] = useState(false);
  function validateEmail(email) {
    const regexp = /^\S+@\S+\.\S+$/;
    if (regexp.test(email)) setValid(true);
    else setValid(false);
  }

  return (
    <>
      <h2 className="subtitle">4. Input</h2>
      <form>
        <div className="login">
          <div className="login-wrap">
            <p>E-mail</p>
            <label className="input-form">
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => validateEmail(e.target.value)}
              />
              <div>{valid ? <ValidIcon /> : <InvalidIcon />}</div>
            </label>
          </div>
          <div className="login-wrap">
            <p>Password</p>
            <label className="input-form">
              <input
                type={visible ? "text" : "password"}
                placeholder="Password"
              />
              <div id="visible" onClick={() => setVisible(!visible)}>
                {visible ? <VisibleIcon /> : <InvisibleIcon />}
              </div>
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
