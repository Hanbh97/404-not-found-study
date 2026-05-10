/**
 * 풀이 과정
 * 1. 최고 득점을 다룰 highScores와 정답을 담을 answer를 선언
 * 2. score를 순회하며 숫자를 넣고, 정렬
 * 3. 원하는 길이보다 초과하면 잘라냄
 * 4. answer에 가장 첫 번째 점수를 저장
 */

function solution(k, score) {
  const highScores = [];
  const answer = [];

  for (let s of score) {
    highScores.push(s);
    highScores.sort((a, b) => a - b);

    if (highScores.length > k) {
      highScores.shift();
    }

    answer.push(highScores[0]);
  }

  return answer;
}
