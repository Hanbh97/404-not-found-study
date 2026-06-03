function solution(today, terms, privacies) {
  const [tYear, tMonth, tDay] = today.split(".").map(Number);
  const todayDays = tYear * 12 * 28 + tMonth * 28 + tDay;

  const termMap = {};
  for (let t of terms) {
    const [type, month] = t.split(" ");
    termMap[type] = Number(month);
  }

  const result = [];

  privacies.forEach((privacy, idx) => {
    const [dateStr, type] = privacy.split(" ");
    const [pYear, pMonth, pDay] = dateStr.split(".").map(Number);

    const baseDays = pYear * 12 * 28 + pMonth * 28 + pDay;
    const expireDays = baseDays + termMap[type] * 28;

    if (expireDays <= todayDays) {
      result.push(idx + 1);
    }
  });

  return result;
}

/*
 * 문제 이해
 * 오늘 날짜와 약관별 유효기간 배열 그리고 수집된 개인정보 배열이 주어짐
 * 각 개인정보의 수집 일자에 약관 유효기간을 더한 만료일이 오늘 날짜보다 지났는지 확인
 * 만료되었거나 오늘 날짜와 같아져서 파기해야 하는 개인정보의 번호를 배열에 담아 반환
 */

/*
 * 문제 풀이
 * 모든 달은 28일까지 있다는 조건을 활용해 오늘 날짜를 '연*12*28 + 월*28 + 일' 공식을 통해 총 일수로 변환
 * 약관 배열을 순회하며 약관 종류와 유효기간을 Key-Value 형태로 객체 termMap에 저장
 * 개인정보 배열을 돌며 수집일의 총 일수를 구하고 유효기간을 더한 만료 총 일수가 오늘 총 일수 이하이면 결과에 번호를 담음
 */
