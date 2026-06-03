function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((char) => !skip.includes(char));

  return s
    .split("")
    .map((char) => {
      const currentIdx = alphabet.indexOf(char);
      const newIdx = (currentIdx + index) % alphabet.length;
      return alphabet[newIdx];
    })
    .join("");
}

/*
 * 문제 이해
 * 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿈
 * 이때 skip에 포함된 알파벳은 세지 않고 건너뜀
 * 알파벳이 z를 넘어갈 경우 다시 a로 돌아와서 계산한 최종 문자열을 반환
 */

/*
 * 문제 풀이
 * a부터 z까지의 알파벳 배열을 만든 후 filter()와 includes()를 사용해 패스할 문자를 미리 제거
 * 문자열 s를 배열로 쪼갠 뒤 map()을 순회하며 skip이 제거된 알파벳 배열에서의 현재 인덱스 찾기
 * 현재 인덱스에 index를 더하고 알파벳 배열의 길이로 나머지 연산(%)을 수행해 z를 넘어갈 때의 예외 처리
 */
