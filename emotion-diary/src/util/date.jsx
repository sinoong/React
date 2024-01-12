// date.jsx

export const getStringDate = (date) => {
  // date 객체의 toISOString 메서드 : YYYY-MM-DD~~~ (0,9까지니까)slice(0,10)
  return date.toISOString().slice(0, 10);
};