function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;

  for (let i = 0; i < words.length; i++) {
    answer = answer.split(words[i]).join(i);
  }

  return Number(answer);
}

// --풀이
// 숫자 문자열과 대응되는 단어들을 배열로 정의하고 입력된 문자열 s를 answer 변수에 저장한다.
// words 배열을 순회하면서, 각 단어가 answer 문자열에 포함되어 있다면 해당 단어를 숫자로 대체한다.
// 최종적으로 모든 단어가 숫자로 대체된 answer 문자열을 숫자형으로 변환하여 반환한다.
