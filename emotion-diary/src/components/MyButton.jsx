import React from "react";

const MyButton = ({ text, type, onClick }) => {
  // 버튼의 타입 이름이 자기 맘대로일 경우 판단 하기
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
