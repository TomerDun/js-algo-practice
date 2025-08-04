/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak( currDate, dates ) {
  if (dates.length < 1) return 0;
  if(dates[dates.length - 1].date !== currDate) return 0;  
  if (dates.length < 2) return 1;

  function getDaysDiff(d1, d2) {
    const d1Date = new Date(d1);
    const d2Date = new Date(d2);

    let diff = d1Date - d2Date;
    let daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));    
    return daysDiff;  
  }

  let streak = 1;

  for (let i = dates.length - 1; i > 0; i--) {
    let daysDiff = getDaysDiff(dates[i].date, dates[i-1].date);      
    if (daysDiff === 1)  streak ++;
    else {
      return streak;
    }
  }  

  return streak;
}

exports.solution = currentStreak;