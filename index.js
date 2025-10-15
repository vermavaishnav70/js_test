function solution(D) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let result = {};
  days.forEach((day) => {
    result[day] = null;
  });
  Object.keys(D).forEach((date) => {
    let day = days[(new Date(date).getDay() + 6) % 7]; // convert date → weekday
    result[day] = result[day] !== null ? result[day] + D[date] : D[date];
  });

  for (let startIdx = 0; startIdx < 7; startIdx++) {
    if (result[days[startIdx]] !== null) {
      let gapLength = 0;
      let nextIdx = (startIdx + 1) % 7;
      while (result[days[nextIdx]] === null && gapLength < 7) {
        gapLength++;
        nextIdx = (startIdx + 1 + gapLength) % 7;
      }
      if (gapLength > 0 && gapLength < 7) {
        let startValue = result[days[startIdx]];
        let endValue = result[days[nextIdx]];

        for (let i = 1; i <= gapLength; i++) {
          let interpolatedIdx = (startIdx + i) % 7;
          let ratio = i / (gapLength + 1);
          result[days[interpolatedIdx]] = Math.floor(
            startValue + ratio * (endValue - startValue)
          );
        }
      }
    }
  }
  return result;
}

module.exports = solution;
