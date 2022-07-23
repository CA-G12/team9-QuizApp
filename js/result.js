let text = document.querySelector("h1")
let userScore = document.querySelector(".userScore")
let highestScore = document.querySelector(".highestScore")
let users = JSON.parse(localStorage.getItem("users"));
let userScores =[]
for (let i = 0; i < users.length; i++) {
    userScores.push(users[i]["score"])
}
console.log(users)
console.log(users[1]['score'])
displayResults()
function displayResults(){
    userScore.textContent=`${score}`
    let highest = getHighestScore()
    highestScore.textContent= `${highest}`
    if(score<=5){
        text.textContent= "Sorry.."
    }
}
function getHighestScore (){
    let highestScore =userScores.reduce(function(a, b) {
      return Math.max(a, b);
  })
  return highestScore
  }