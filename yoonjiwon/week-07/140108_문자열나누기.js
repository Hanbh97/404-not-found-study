function solution(s) {
  let answer = 0;
  let x = "";
  let same = 0;
  let diff = 0;

  for (let char of s) {
    if (same === 0 && diff === 0) {
      x = char;
    }

    if (char === x) {
      same++;
    } else {
      diff++;
    }

    if (same === diff) {
      answer++;
      same = 0;
      diff = 0;
    }
  }

  if (same !== 0 || diff !== 0) {
    answer++;
  }

  return answer;
}

//--풀이
// 문자열을 순회하면서, 같은 문자와 다른 문자의 개수를 세는 방식으로 문제를 해결한다.
// 같은 문자와 다른 문자의 개수가 같아지는 순간, 하나의 발음이 완성된 것으로 간주하여 카운트를 증가시킨다.
// 문자열을 모두 순회한 후에도 같은 문자나 다른 문자가 남아있다면, 마지막 발음으로 간주하여 카운트를 추가한다. 최종적으로 발음의 개수를 반환한다.
