/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/

function champions( teams ) {
  //your code
  let winningTeam;
  let winningTeamPoints = 0;
  let winningTeamDiff = 0;

  for (let i in teams) {
    const teamPoints = teams[i].wins * 3 + teams[i].draws;
    const teamDiff = teams[i].scored - teams[i].conceded;
    if (teamPoints > winningTeamPoints) {
      winningTeam = i;
      winningTeamPoints = teamPoints;
      winningTeamDiff = teamDiff;
    }
    else if (teamPoints === winningTeamPoints) {
      if (teamDiff > winningTeamDiff) {
        winningTeamDiff = teamDiff;
        winningTeam = i;
      }
    }
  }
  return teams[winningTeam].name;
}

exports.solution = champions;