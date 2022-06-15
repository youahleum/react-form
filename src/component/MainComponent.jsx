import React, { useEffect } from "react";
import AuthCheck from "./hoc/AuthCheck";

function MainComponent(props) {
  useEffect(() => {
    console.log("MainPage:", props);
  }, [props]);

  return <div>MainComponent</div>;
}
//현재 고차컴포넌트로 MainComponent를 감싸서 고차컴포넌트를 export하고 있는것
export default AuthCheck(MainComponent);
