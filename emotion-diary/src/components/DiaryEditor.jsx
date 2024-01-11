import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emoiton1.png`,
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emoiton2.png`,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emoiton3.png`,
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emoiton4.png`,
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emoiton5.png`,
    emotion_descript: "끔찍함",
  },
];

const getStringDate = (date) => {
  // date 객체의 toISOString 메서드 : YYYY-MM-DD~~~ (0,9까지니까)slice(0,10)
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  // console.log(getStringDate(new Date()));
  // 오늘의 날짜를 초기값으로
  const [date, setDate] = useState(getStringDate(new Date()));

  const navigate = useNavigate();

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
      />
      <div>
        {/* section은 div와 똑같은데 의미론적 태그이다 */}
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            {/* 캘린더 선택하는 input */}
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <div key={it.emotion_id}>{it.emotion_descript}</div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
