function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((char) => !skip.includes(char));

  const len = alphabet.length;

  return s
    .split("")
    .map((char) => {
      const currentIndex = alphabet.indexOf(char);
      const newIndex = (currentIndex + index) % len;
      return alphabet[newIndex];
    })
    .join("");
}

// --풀이
// 알파벳 문자열을 배열로 변환한 후, skip에 포함된 문자를 필터링하여 새로운 alphabet 배열을 생성한다.
// alphabet 배열의 길이를 len 변수에 저장한다.
// 입력 문자열 s를 문자 단위로 분할하여 배열로 만든다.
