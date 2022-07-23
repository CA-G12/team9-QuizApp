var questions = [
  {
    question: 'How do you call a function named "myFunction"?',
    a: "myFunction()",
    b: "call function myFunction()",
    c: "call myFunction()",
    d: "None of the mentioned",
    correct: "a",
  },
  {
    question: 'How do you call a function named "myFunction"?',
    a: "myFunction()",
    b: "call function myFunction()",
    c: "call myFunction()",
    d: "None of the mentioned",
    correct: "a",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    correct: "a",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    a: "const",
    b: "var",
    c: "let",
    d: "constant",
    correct: "a",
  },
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is",
    a: "Integer",
    b: "Undefined",
    c: "Object",
    d: "Boolean",
    correct: "d",
  },
  {
    question:
      "When an operator’s value is NULL, the typeof returned by the unary operator is",
    a: "Integer",
    b: "Undefined",
    c: "Object",
    d: "Boolean",
    correct: "d",
  },
  {
    question: "What does the Javascript “debugger” statement do?",
    a: "It will debug all the errors in the program at a runtime",
    b: "it acts as a breakpoint in a program",
    c: "it will debug error in the current statement",
    d: "All of the above",
    correct: "b",
  },
  {
    question: "What does the Javascript “debugger” statement do?",
    a: "It will debug all the errors in the program at a runtime",
    b: "it acts as a breakpoint in a program",
    c: "it will debug error in the current statement",
    d: "All of the above",
    correct: "b",
  },
  {
    question: "What does the ‘toLocateString()’ method do in JS?",
    a: "Returns a localized object representation",
    b: "Returns a localized string representation of an object",
    c: "Returns a parsed string",
    d: "None of the above",
    correct: "b",
  },

  {
    question: "What does the ‘toLocateString()’ method do in JS?",
    a: "Returns a localized object representation",
    b: "Returns a localized string representation of an object",
    c: "Returns a parsed string",
    d: "None of the above",
    correct: "b",
  },
];

let Qus = document.querySelector(".que-test span");
let option = document.querySelectorAll(".option span");
let nextBtn = document.querySelector(".next-btn");
let score = 0;
let random;
let counter = 0;
function fillQusAndOptions() {
  if (counter == 10) {
    window.location.href = "../html/result.html";
    let users = JSON.parse(localStorage.getItem("users"));
    users[users.length - 1]['score']=score
    localStorage.setItem("users", JSON.stringify(users));
  }
  random = Math.floor(Math.random() * 10);
  Qus.textContent = questions[random]["question"];
  option[0].textContent = questions[random]["a"];
  option[1].textContent = questions[random]["b"];
  option[2].textContent = questions[random]["c"];
  option[3].textContent = questions[random]["d"];
  counter++;
  let total = document.querySelector(".total p");
  total.textContent = counter;
}
fillQusAndOptions();

//********************************************************************************/
let optionList = document.querySelectorAll(".option-list .option");
optionList[0].addEventListener("click", selected);
optionList[1].addEventListener("click", selected);
optionList[2].addEventListener("click", selected);
optionList[3].addEventListener("click", selected);
let selectOption;
function selected(e) {
  selectOption = e.target.textContent.trim();
}

function checkResult() {
  if (selectOption == questions[random][questions[random]["correct"]]) {
    score++;
  }
}
nextBtn.addEventListener("click", checkResult);
nextBtn.addEventListener("click", fillQusAndOptions);
