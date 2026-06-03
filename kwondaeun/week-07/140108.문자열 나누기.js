function solution(s) {
  let count = 0;
  let fixedChar = "";
  let same = 0;
  let diff = 0;

  for (let char of s) {
    if (!fixedChar) {
      fixedChar = char;
    }

    if (char === fixedChar) {
      same++;
    } else {
      diff++;
    }

    if (same === diff) {
      count++;
      fixedChar = "";
      same = 0;
      diff = 0;
    }
  }

  if (fixedChar !== "") {
    count++;
  }

  return count;
}

/*
 * 문제 이해
 * 문자열의 첫 글자를 기준(x)으로 잡고 한 글자씩 읽어나감
 * 'x와 같은 글자 수'와 'x와 다른 글자 수'가 처음으로 같아지는 순간 문자열을 잘라냄
 * 문자를 끝까지 읽었을 때 분리된 총 문자열 덩어리의 개수를 구함
 */

/*
 * 문제 풀이
 * s를 순회하며 첫 글자를 fixedChar에 저장하고, 같은 글자(same)와 다른 글자(diff)의 개수 세기
 * same과 diff가 같아지면 count를 올리고 기준 글자와 카운터 변수들을 모두 초기화
 * 반복문이 끝난 후에도 남아있는 글자가 있으면 count +  1 반환
 */
