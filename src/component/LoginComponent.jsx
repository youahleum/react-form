//로그인을 하지 않은 사람만 접근 가능

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthCheck from "./hoc/AuthCheck";
import { loginUser } from "./reducer/userSlice"; //action
import { RequiredLogout } from "./hoc/userType";

function LoginComponent() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userSlice);

  const SubmitFunc = async (e) => {
    e.preventDefault();
    let user = {
      id,
      name: "판다코딩",
    };
    await dispatch(loginUser(user));
    navigate("/");
  };

  useEffect(() => {
    if (user.isLogin) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <form onSubmit={SubmitFunc}>
        <label htmlFor="">아이디</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <br />
        <label htmlFor="">비번</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
export default AuthCheck(LoginComponent, RequiredLogout);
