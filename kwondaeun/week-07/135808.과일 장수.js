function solution(k, m, score) {
  let totalProfit = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    let lowestScore = score[i + m - 1];

    if (lowestScore !== undefined) {
      totalProfit += lowestScore * m;
    }
  }

  return totalProfit;
}

/*
 * 문제 이해
 * 사과들의 점수 배열(score)이 주어지고, 한 상자에 들어가는 사과의 개수 m이 주어짐.
 * 한 상자의 가격은 상자에 담긴 사과 중 가장 낮은 점수 * m으로 결정됨.
 * 사과들을 적절히 포장해 만들 수 있는 모든 상자의 최대 이익을 구함.
 */

/*
 * 문제 풀이
 * 비싼 사과들끼리 뭉쳐야 이득이므로 score 배열을 내림차순 정렬
 * 정렬된 배열을 m개씩 건너뛰면서(i += m), 각 상자의 최하위 점수인 score[i + m - 1] 찾기
 * 최하위 점수가 존재할 때마다 상자의 가격(최하위 점수 * m)을 totalProfit에 누적하여 반환
 */ 
