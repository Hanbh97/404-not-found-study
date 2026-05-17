// 문제: 2016년
// 레벨: Level 1
// 문제 간략 설명: 입력받은 a월 b일이 몇요일인지 확인하는 문제
/*
풀이:
 1. 요일을 반환할 문자열을 배열에 담음
 2. Date 객체를 사용하여 2016년의 요일을 확인
 3. 월의 경우 0부터 시작하므로 a-1을 대입
 4. 이후 입력한 요일 문자열 배열을 getDay() 메소드로 반환
*/

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const date = new Date(2016, a - 1, b);
  return day[date.getDay()];
}
