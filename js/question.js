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
  console.log(nextBtn);
  let random;
  let counter =0
  function fillQusAndOptions() {
      if (counter==10){
          window.location.href="../html/result.html"
      }
    random = Math.floor(Math.random() * 10);
    console.log(random);
    Qus.textContent = questions[random]["question"];
    option[0].textContent = questions[random]["a"];
    option[1].textContent = questions[random]["b"];
    option[2].textContent = questions[random]["c"];
    option[3].textContent = questions[random]["d"];
    counter ++
    let total= document.querySelector('.total p')
    total.textContent= counter
  }
  
  fillQusAndOptions();
  nextBtn.addEventListener("click", fillQusAndOptions);
  
  //********************************************************************************/
  
  let trueResult = document.querySelector('div.true')
  let wrongResult = document.querySelector('div.wrong')
  trueResult.style.display='none';
  wrongResult.style.display='none';
  
  let optionList = document.querySelectorAll(".option-list .option");
  let score =0
  optionList[0].addEventListener("click", checkResult);
  optionList[1].addEventListener("click", checkResult);
  optionList[2].addEventListener("click", checkResult);
  optionList[3].addEventListener("click", checkResult);
  function checkResult(e) {
  
  
  
    if (e.target.textContent.trim() == questions[random][questions[random]["correct"]]) {
           // trueResult.style.display='block';
          //   e.target.parent.lastChild.style.display ="block"
          //   e.target.parent.lastChild=
  score++
  
  
    }else{
      // wrongResult.style.display='block';
  
    }
  
    console.log(e.target.textContent.trim());
  }