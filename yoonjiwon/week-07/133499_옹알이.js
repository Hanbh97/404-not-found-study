function solution(babbling) {
  let count = 0;

  for (let word of babbling) {
    if (
      word.includes("ayaaya") ||
      word.includes("yeye") ||
      word.includes("woowoo") ||
      word.includes("mama")
    ) {
      continue;
    }

    word = word
      .replaceAll("aya", " ")
      .replaceAll("ye", " ")
      .replaceAll("woo", " ")
      .replaceAll("ma", " ")
      .trim();

    if (word === "") count++;
  }

  return count;
}

//--풀이
// "ayaaya", "yeye", "woowoo", "mama"가 포함되어 있는지 체크한다.
// 포함되어 있다면, 해당 단어는 유효하지 않으므로 다음 단어로 넘어간다.
// 유효한 단어에 대해서는 "aya", "ye", "woo", "ma"를 공백으로 대체한다.
// 대체 후 남은 문자열이 공백이면, 해당 단어는 유효한 발음으로 간주하여 카운트를 증가시킨다. 최종적으로 유효한 발음의 개수를 반환한다.
