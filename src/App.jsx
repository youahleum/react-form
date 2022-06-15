import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import LoginComponent from "./component/LoginComponent";
import MainComponent from "./component/MainComponent";
import PostUpload from "./component/PostUpload";
import { clearUser } from "./component/reducer/userSlice";

export default function App() {
  const user = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch(clearUser());
            }}
          >
            로그아웃
          </button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<MainComponent msg="test" />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/upload" element={<PostUpload />} />
      </Routes>
    </div>
  );
}
