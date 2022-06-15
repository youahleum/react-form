import React, { useState } from "react";
import AuthCheck from "./hoc/AuthCheck";
import { RequiredLogin } from "./hoc/userType";

function PostUpload(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const SubmitFunc = (e) => {
    e.preventDefalut();
    let body = {
      title,
      content,
      userId: props.user.id,
    };
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
        <button>제출</button>
      </form>
    </>
  );
}
export default AuthCheck(PostUpload, RequiredLogin);
