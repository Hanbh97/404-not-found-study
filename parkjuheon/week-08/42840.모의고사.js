// 문제: 모의고사
// 레벨: Level 1
// 문제 간략 설명: 각 수포자가 찍은 문제 중 문제를 가장 많이 맞힌 사람을 배열에 반환하는 문제
/*
풀이:
 1. 각 수포자가 찍은 답을 배열로 담음
 2. 각 수포자들의 점수를 담을 score 배열 생성
 3. 정답인 answers와 각 수포자가 찍은 답을 비교하며 맞추면 각 score 배열 값 증가
 4. score에서 가장 큰 수를 가진 배열의 숫자에 1을 더하여 반환
 5. 만약 점수가 동일한 경우도 있을 수 있기 때문에 result 배열에 넣어 결과를 반환
*/

function solution(answers) {
  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === answer1[i % answer1.length]) score[0]++;
    if (answers[i] === answer2[i % answer2.length]) score[1]++;
    if (answers[i] === answer3[i % answer3.length]) score[2]++;
  }

  const max = Math.max(...score);
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}
