function solution(k, score) {
  let hallOfFame = [];
  let result = [];

  for (let s of score) {
    hallOfFame.push(s);

    hallOfFame.sort((a, b) => b - a);

    if (hallOfFame.length > k) {
      hallOfFame.pop();
    }

    result.push(hallOfFame[hallOfFame.length - 1]);
  }

  return result;
}

/*
 * 문제 이해
 * 매일 한 명의 가수가 점수를 발표하고, 상위 k명만 명예의 전당에 오름
 * k일차까지는 모든 가수의 점수가 명예의 전당에 오름
 * k일차 이후부터는 새로운 점수가 기존 명예의 전당의 최하위 점수보다 높으면 바뀜
 * 매일매일 명예의 전당에 있는 점수 중 최하위 점수를 차례대로 배열에 담아 반환
 */

/*
 * 문제 풀이
 * 점수를 넣을 때마다 내림차순으로 정렬
 * 만약 명예의 전당의 크기가 k를 넘어가면, 정렬된 배열의 맨 뒤를 pop()으로 제거
 */
