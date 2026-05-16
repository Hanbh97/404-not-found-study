/**
 * 풀이 과정
 * 1. score를 내림차순으로 정렬
 * 2. m 크기만큼 잘라서 확인하는데, 가장 끝에 있는 과일(가장 낮은 품질)을 확인하여
 *    해당 과일의 품질만큼 * m
 * 3. 각 상자의 품질 점수를 합산
 */

function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    let lastIdx = i + m - 1;

    if (lastIdx < score.length) {
      answer += score[lastIdx] * m;
    }
  }

  return answer;
}
