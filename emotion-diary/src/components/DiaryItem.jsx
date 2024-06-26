// DiaryItem.jsx
import React from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  // 이미지가 안 뜰 경우
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  // 년 월 일 띄우기
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  // 일기 조회로 이동
  const goDetail = () => {
    navigate(`/diary/${id}`)
  }

  // 수정으로 이동
  const goEdit = () => {
    navigate(`/edit/${id}`)
  }

  return (
    <div className="DiaryItem">
      <div
      onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">
          {/* 내용 추가하고 길면 자르기 slice이용 */}
          {content.slice(0, 25)}
        </div>
      </div>
      <div className="btn_wrapper">
        <MyButton onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
