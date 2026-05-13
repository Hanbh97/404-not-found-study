/**
 * 풀이 과정
 * 1. 끊은 단어를 담을 배열 splitS를 선언
 * 2. 같은 개수, 다른 개수를 카운팅할 변수와 끊을 단어를 담을 str, 첫 번째 글자를 담을 x를 선언
 * 3. 각 문자를 순회하며 첫 단어일 경우 sameCnt와 x를 초기화
 * 4. 이후 같거나 다르면 카운팅
 * 5. 두 카운팅이 같을 경우 단어를 끊어서 저장
 * 6. 배열의 길이를 출력
 */

function solution(s) {
  const splitS = [];

  let sameCnt = 0;
  let difCnt = 0;
  let str = "";
  let x = "";

  for (let c of s) {
    if (x === "") {
      x = c;
      sameCnt++;
    } else if (x !== c) {
      difCnt++;
    } else if (x === c) {
      sameCnt++;
    }

    str += c;

    if (sameCnt === difCnt) {
      splitS.push(str);
      sameCnt = 0;
      difCnt = 0;
      str = "";
      x = "";
    }
  }

  if (str !== "") splitS.push(str);

  return splitS.length;
}
