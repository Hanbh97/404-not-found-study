// 문제: 카드 뭉치
// 레벨: Level 1
// 문제 간략 설명: 배열에 주어진 단어들로 원하는 문장을 만들 수 있는지 없는지 구하는 문제
/*
풀이:
 1. 각 배열 cards1과 cards2를 탐색할 변수 i와 j 선언
 2. 목표 문장(goal)의 길이만큼 반복
 3. cards1과 cards2를 번갈아가면서 탐색하며 goal와 일치하는지 탐색
 4. 일치하지 않는다면 'No' 반환
 5. 일치한다면 'Yes' 반환
*/

function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (let n = 0; n < goal.length; n++) {
    if (cards1[i] === goal[n]) {
      i++;
    } else if (cards2[j] === goal[n]) {
      j++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
