/**
 * 날짜를 'YYYY년 MM월 DD일 HH시 MM분' 형식의 문자열로 변환하는 함수
 * @param {string} createdAt - 변환할 날짜
 * @returns {string} YYYY년 MM월 DD일 HH시 MM분 형식의 문자열
 */
export function formatDate(createAt) {
  const date = new Date(createAt);

  if (isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${min}분`;
}
