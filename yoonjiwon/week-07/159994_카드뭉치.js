function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;

  for (const word of goal) {
    if (idx1 < cards1.length && cards1[idx1] === word) {
      idx1++;
    } else if (idx2 < cards2.length && cards2[idx2] === word) {
      idx2++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
// --풀이
// `idx1`과 `idx2`를 각각 0으로 초기화하여 현재 단어가 `cards1`의 현재 위치에 있는 경우, `idx1`을 증가시킨다.
// 그렇지 않고 현재 단어가 `cards2`의 현재 위치에 있는 경우, `idx2`를 증가시킨다.
// 두 경우 모두 해당하지 않으면, "No"를 반환하고 모든 단어가 일치하면 "Yes"를 반환한다.
