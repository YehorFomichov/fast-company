const dateConvert = (currentTime) => {
  const d1 = new Date()
  const d2 = new Date(Number(currentTime))
  const minute = 60000
  const diff = d1 - d2
  if (diff <= minute) {
    return '1 минуту назад'
  } else if (diff <= minute * 5 && diff > minute) {
    return '5 минут назад'
  } else if (diff <= minute * 10 && diff > minute * 5) {
    return '10 минут назад'
  } else if (diff <= minute * 30 && diff > minute * 10) {
    return '30 минут назад'
  } else if (diff <= minute * 60 * 24 && diff > minute * 30) {
    return 'hours.minutes'
  } else if (diff <= minute * 60 * 24 * 365 && diff > minute * 60 * 24) {
    return monthDays(d2)
  } else return 'day.month.year'
}
function monthDays(date) {
  const month = date.getUTCMonth()
  const monthString = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ]
  const day = date.getUTCDate()
  return monthString[month] + ', ' + day
}
// var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1; //months from 1-12
// var day = dateObj.getUTCDate();
// var year = dateObj.getUTCFullYear();

// newdate = year + "/" + month + "/" + day;

export default dateConvert
