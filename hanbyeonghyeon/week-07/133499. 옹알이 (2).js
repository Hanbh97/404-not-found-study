/**
 * 풀이 과정
 * 1. babbling을 순회하며 각 단어마다 반복문을 실행
 * 2. 단어를 babbling을 기준으로 띄어쓰기하고 split 으로 쪼갬
 * 3. 불필요한 공백 제거
 * 4. 모든 조건에 부합하는지 판별하기 위한 isValid 변수 선언
 * 5. 단어를 쪼갠 배열에서 babbling으로만 이루어져있고, 이전 단어와 겹치는지 판별
 * 6. 해당 반복문을 전부 만족한다면 answer + 1;
 */

function solution(babbling) {
  const babblingWords = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let word of babbling) {
    const splitWord = word
      .replaceAll("aya", "aya ")
      .replaceAll("ye", "ye ")
      .replaceAll("woo", "woo ")
      .replaceAll("ma", "ma ")
      .split(" ")
      .filter((w) => w !== "");

    let isValid = true;

    for (let i = 0; i < splitWord.length; i++) {
      if (!babblingWords.includes(splitWord[i])) {
        isValid = false;
        break;
      }

      if (i > 0 && splitWord[i] === splitWord[i - 1]) {
        isValid = false;
        break;
      }
    }

    if (isValid) answer++;
  }

  return answer;
}
