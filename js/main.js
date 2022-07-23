let btnStart = document.getElementById("btn-get-start");
btnStart.addEventListener("click", setItemLocal);

function setItemLocal() {
  let userName = document.getElementById("user-name").value;
  let score = 0;
  //   console.log(userName);
  if(userName){
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      let data = { userName: userName, score: 0 };
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      let users = [];
      let data = { userName: userName, score: 0 };
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
    } 
    window.location.href = "../html/question.html";
}else{
    let checkEnterUsername = document.getElementById("check-enter-username");
    checkEnterUsername.style.display='block'  
}
}
