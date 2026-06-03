function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const minMatch = lottos.filter((num) => win_nums.includes(num)).length;
  const zeroCount = lottos.filter((num) => num === 0).length;

  const maxMatch = minMatch + zeroCount;

  return [rank[maxMatch], rank[minMatch]];
}

/*
 * 문제 이해
 * 구매한 로또 번호 중 알아볼 수 없는 번호가 0으로 표시되어 주어짐
 * 당첨 번호와 비교하여 알아볼 수 있는 번호 중 일치하는 개수를 구함
 * 0으로 표시된 번호들이 모두 당첨되거나 모두 낙첨되는 경우를 가정하여 얻을 수 있는 최고 순위와 최저 순위를 배열에 담아 반환
 */

/*
 * 문제 풀이
 * 당첨 개수(0~6개)에 따른 순위를 매칭할 배열 rank를 정의 (0개와 1개 맞춘 경우는 모두 6등)
 * filter()와 includes()를 활용해 확실히 일치하는 번호의 개수(minMatch)와 알아볼 수 없는 번호의 개수(zeroCount)를 각각 계산
 * 확실히 일치하는 개수에 0의 개수를 더해 최고 맞춘 개수(maxMatch)를 구한 뒤 rank 배열의 인덱스로 활용해 순위를 찾아 반환
 */
