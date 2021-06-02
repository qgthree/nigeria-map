const dates = []
const start = new Date()
const month = start.getMonth()
const year = start.getFullYear()
for (let y = year; y <= year + 5; y++) {
  let m
  if (y > year) { m = 1 } else { m = month + 1 }
  for (m; m < 13; m++) {
    dates.push({ id: y + '-' + m.toString().padStart(2, '0'), year: y, month: m })
  }
}

export default dates
