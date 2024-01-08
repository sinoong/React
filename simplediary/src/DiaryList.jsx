import React, { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);
  // console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {/* it은 프롭받은 더미리스트 */}
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// 만약 diaryList를 undefined로 보냈을 경우 이렇게 사용하면 됨
// DiaryList.defaultProps = {
//   diaryList: [],
// };

export default DiaryList;
