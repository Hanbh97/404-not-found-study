function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let size of sizes) {
    let width = Math.max(size[0], size[1]);
    let height = Math.min(size[0], size[1]);

    if (width > maxWidth) {
      maxWidth = width;
    }
    if (height > maxHeight) {
      maxHeight = height;
    }
  }

  return maxWidth * maxHeight;
}

/**
 * 문제 이해
 * 모든 명함을 가로세로 구분 없이 [더 긴 변, 더 짧은 변] 구조로 통일하기
 * 각 명함의 [가로, 세로] 중에서 큰 값은 무조건 가로, 작은 값은 무조건 세로에 정렬하기
 * 가장 큰 가로 값과 가장 큰 세로 값 찾기
 * 두 최댓값을 곱하면 모든 명함이 들어가는 지갑의 최소 크기가 나옴
 */

/**
 * 문제 풀이
 * maxWidth와 maxHeight에 가장 큰 가로 세로 길이 저장
 * for문 사용해서 현재 명함에서 더 긴 쪽과 더 짧은 쪽 구분
 * if문 사용해서 가로들 중 가장 큰 값, 세로들 중 가장 큰 값 갱신 후 곱한 값을 반환
 */
