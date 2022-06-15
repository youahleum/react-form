import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// 오타를 줄이기 위한 상수로 만든 단어들
import { RequiredLogin, RequiredLogout } from "./userType";

//SpecificComponent  ->  현재 maincomponent를 인자로 받고 있는것
export default function AuthCheck(SpecificComponent, option = null) {
  function UserCheck(props) {
    const user = useSelector((state) => state.userSlice);
    const navigate = useNavigate();
    useEffect(() => {
      if (option) {
        if (option === RequiredLogin && !user.isLogin) navigate("/");
        if (option === RequiredLogout && user.isLogin) navigate("/");
      }
    }, []);
    return (
      <>
        {/*  무조건 props가 있다면 자식 컴포넌트에 props를 전달을 해주어야 한다. */}
        <SpecificComponent {...props} />

        {/* 만약 {...props}를 전달을 안해주면 hoc에서는 props가 찍히지만 mainpage에서는 안찍힌다.
         */}
        {/* <SpecificComponent  /> */}
      </>
    );
  }
  return UserCheck;
}
