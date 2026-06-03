function solution(a, b) {
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let totalDays = b;
  for (let i = 0; i < a - 1; i++) {
    totalDays += months[i];
  }

  return days[totalDays % 7];
}

/*
 * 문제 이해
 * 2016년 1월 1일은 금요일이고 2016년은 윤년으로 2월이 29일까지 있음
 * 두 수 a와 b가 주어졌을 때 2016년 a월 b일이 무슨 요일인지 반환하기
 */

/*
 * 문제 풀이
 * 각 달의 일수를 담은 배열 months와 1월 1일 기준 요일을 판단할 days 배열 생성
 * 1월부터 a-1월까지의 모든 일수를 다 더하고 마지막 달의 일수인 b까지 더해 총 일수를 구함
 * 총 일수를 7로 나눈 나머지를 요일 배열의 인덱스로 활용하여 해당 요일을 반환
 */
