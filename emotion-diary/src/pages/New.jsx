import React, { useState, useEffect } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";

// const getStringDate = (date) => {
//   // date 객체의 toISOString 메서드 : YYYY-MM-DD~~~ (0,9까지니까)slice(0,10)
//   return date.toISOString().slice(0, 10);
// };

const New = () => {

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);

  return <div>
    <DiaryEditor />
  </div>
  // console.log(getStringDate(new Date()));
  // 오늘의 날짜를 초기값으로
  // const [date, setDate] = useState(getStringDate(new Date()));

  // const navigate = useNavigate();

  // return (
  //   <div>
  //     <MyHeader
  //       headText={"새 일기쓰기"}
  //       leftChild={
  //         <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
  //       }
  //     />
  //     <div>
  //       {/* section은 div와 똑같은데 의미론적 태그이다 */}
  //       <section>
  //         <h4>오늘은 언제인가요?</h4>
  //         <div className="input-box">
  //           {/* 캘린더 선택하는 input */}
  //           <input
  //             className="input-date"
  //             value={date}
  //             onChange={(e) => setDate(e.target.value)}
  //             type="date"
  //           />
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  // );
};

export default New;
