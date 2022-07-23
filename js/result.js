let text = document.querySelector("h1");
let userScore = document.querySelector(".userScore");
let highestScore = document.querySelector(".highestScore");
let users = JSON.parse(localStorage.getItem("users"));
displayResults();
function displayResults() {
  let currentUserScore = users[users.length-1]["score"]
  userScore.textContent = currentUserScore
  let highest = getHighestScore();
  highestScore.textContent = `${highest}`;
  if (currentUserScore <= 5) {
    text.textContent = "Sorry..";
  }
}
function getHighestScore() {
  let userScores = [];
  for (let i = 0; i < users.length; i++) {
    userScores.push(users[i]["score"]);
  }
  let highestScore = userScores.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return highestScore;
}
