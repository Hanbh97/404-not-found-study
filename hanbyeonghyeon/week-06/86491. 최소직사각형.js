/**
 * 풀이 과정
 * 1. 최대 너비와 높이를 저장할 변수를 각각 선언.
 * 2. sizes를 순회하면서 너비가 더 길도록 직사각형을 눕힘
 * 3. 가장 긴 너비와 높이를 저장
 * 4. 해당 넓이를 계산
 */

function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (let i = 0; i < sizes.length; i++) {
    let [w, h] = sizes[i];

    if (w < h) {
      let temp = h;

      h = w;
      w = temp;
    }

    maxW = Math.max(maxW, w);
    maxH = Math.max(maxH, h);
  }

  return maxW * maxH;
}
