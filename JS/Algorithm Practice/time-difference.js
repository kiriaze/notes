// time formatted as 00:00
var degreeDiff = (time) => {
  // check to make sure string is correct format

  var hour = parseInt(time.split(':')[0]);
  var minute = parseInt(time.split(':')[1]);

  var minuteDegree = minute / 60 * 360;
  var fullHourDegree = (hour / 12 * 360); 
  var partialHourDegree = (minute / 60) * (1 / 12 * 360); 
  var hourDegree = fullHourDegree + partialHourDegree;
  var res = Math.abs(minuteDegree - hourDegree);

  return res === 360 ? 0 : res;
}


console.log('12:00: ', degreeDiff('12:00') === 0);
console.log('06:00: ', degreeDiff('06:00') === 180);
console.log('06:30: ', degreeDiff('06:30') === 15);