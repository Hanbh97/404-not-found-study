/**
 * 풀이 과정
 * 1. 각 인덱스에 단어를 담은 numStr 배열을 선언
 * 2. map 을 통해 s 문자열의 단어를 인덱스로 변환
 * 3. 변환 후 숫자형으로 형변환
 */

function solution(s) {
  const numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numStr.map((str, index) => {
    s = s.replaceAll(str, index);
  });

  return Number(s);
}
