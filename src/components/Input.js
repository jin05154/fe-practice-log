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
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(email)) setValid(true);
    else setValid(false);
  }

  return (
    <>
      <h2 className="subtitle">4. Input</h2>
      <form>
        <div className="login">
          <label className="login-form">
            <p>E-mail</p>
            <div className="input-wrap">
              <input
                type="email"
                className="input-form"
                placeholder="E-mail"
                onChange={(e) => validateEmail(e.target.value)}
              />
              <div className="input-icon">
                {valid ? <ValidIcon /> : <InvalidIcon />}
              </div>
            </div>
          </label>
          <label className="login-form">
            <p>Password</p>
            <div className="input-wrap">
              <input
                type={visible ? "text" : "password"}
                className="input-form"
                placeholder="Password"
              />
              <div
                id="visible"
                className="input-icon"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <VisibleIcon /> : <InvisibleIcon />}
              </div>
            </div>
          </label>
        </div>
      </form>
    </>
  );
}
