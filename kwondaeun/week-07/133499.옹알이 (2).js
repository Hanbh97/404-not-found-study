function solution(babbling) {
  const voca = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let isPossible = true;

    for (let c of voca) {
      if (word.includes(c + c)) {
        isPossible = false;
        break;
      }
    }
    if (isPossible) {
      for (let c of voca) {
        word = word.replaceAll(c, " ");
      }
      if (word.trim().length === 0) {
        count++;
      }
    }
  }
  return count;
}

/**
 * 문제 이해
 * 아기가 발음할 수 있는 네가지 발음("aya", "ye", "woo", "ma")만 조합해서 단어를 만들 수 있는지 확인하고,
 * 발음할 수 잇는 단어의 개수를 반환
 */

/**
 * 문제 풀이
 * 연속된 발음이 있으면 해당 단어는 패스
 * 연속된 발음이 없다면 replace() 사용해서 문자열 내 공백으로 변환
 * trim() 사용해서 빈 문자열이 되면 아기가 발음할 수 있는 단어이므로 count + 1을 함
 */
