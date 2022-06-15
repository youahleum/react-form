import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthCheck from "./hoc/AuthCheck";
import { RequiredLogin } from "./hoc/userType";

function PostUpload(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const SubmitFunc = (e) => {
    e.preventDefalut();
    if (!(title && content)) {
      return alert("값 다 채우시길 바랍니다");
    } else {
      console.log("??");
    }
    let body = {
      title,
      content,
      userId: props.user.id,
    };
    axios
      .post("https://st-fe34.herokuapp.com/api/post/submit", body)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.success) {
          alert("게시글 등록 성공!");
          navigate("/");
        } else {
          alert("게시글 등록 실패");
        }
      });
  };
  return (
    <>
      <div>PostUpload</div>
      <form onSubmit={SubmitFunc}>
        제목 :{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        내용 :
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={{ resize: "none" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button>취소</button>
        <button type="submit">제출</button>
      </form>
    </>
  );
}
export default AuthCheck(PostUpload, RequiredLogin);
