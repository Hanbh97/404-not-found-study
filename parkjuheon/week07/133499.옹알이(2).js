// 문제: 옹알이(2)
// 레벨: Level 1
// 문제 간략 설명: 조카가 발음할 수 있는 단어의 개수 구하는 문제
/*
풀이:
 1. 조카가 말할 수 있는 단어를 배열로 담아둠
 2. babbling 배열에 있는 단어를 쪼개서 한 문자씩 temp에 넣어가며 만약 babySay에 있는 단어가 완성되면 temp를 비움
 3. 연속되는 단어는 말할 수 없기에 prev와 temp를 비교하여 만약 연속되는 단어일 경우 바로 반복을 멈추어 연산을 하지 않도록 함
 4. 각 단어에 대한 반복을 마친 후 만약 temp가 비어 있다면 count의 개수를 더함
 5. 이후 count 값 반환
*/

function solution(babbling) {
  let count = 0;
  const babySay = ["aya", "ye", "woo", "ma"];

  for (baby of babbling) {
    let temp = "";
    let prev = "";

    for (char of baby) {
      temp += char;

      if (babySay.includes(temp)) {
        if (prev === temp) {
          break;
        }
        prev = temp;
        temp = "";
      }
    }

    if (temp === "") count++;
  }

  return count;
}
