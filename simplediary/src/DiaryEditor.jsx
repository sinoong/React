import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  // useEffect(() => {
  //   console.log("DiaryEditor 랜더");
  // });
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // 일정 글자 이상 입력하기
    if (state.author.length < 1) {
      // alert("작성자는 최소 1글자 이상 입력해주세요");
      // focus
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // alert("일기 본문은 최소 5글자 이상 입력해주세요");
      // focus
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    console.log(state);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          // onChange={(e) => {
          //   // console.log(e)
          //   setState({
          //     ...state, //content: state.content, // 얘는 바뀌면 안돼 // 서순 중요
          //     author: e.target.value, // 얘는 바껴야 하지만
          //   }); // 상태를 바뀔 때 마다 업데이트
          // }}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          // onChange={(e) => {
          //   setState({
          //     ...state, //author: state.author, // 얘는 바뀌면 안돼
          //     content: e.target.value,
          //   });
          // }}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default React.memo(DiaryEditor);
