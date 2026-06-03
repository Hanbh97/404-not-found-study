function solution(s) {
  const numbers = [
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

  for (let i = 0; i < numbers.length; i++) {
    s = s.split(numbers[i]).join(i);
  }

  return Number(s);
}

/*
 * 문제 이해
 * 일부 숫자가 영단어로 바뀐 문자열 s가 주어짐
 * 영단어로 바뀐 부분들을 다시 원래의 숫자로 바꾼 뒤 정수로 반환
 */

/*
 * 문제 풀이
 * 영단어들을 0부터 9까지 순서대로 배열에 담기
 * 배열을 돌며 문자열 s에 해당 영단어가 있으면 split()과 join()을 사용해 숫자로 치환
 * 모든 영단어를 숫자로 바꾼 문자열을 Number()를 이용해 숫자로 변환하여 반환
 */
