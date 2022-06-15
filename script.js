beginButton = document.querySelector("#beginButton");
timerEl = document.querySelector("#timeleft"); // timer elements
// firstpage elements
// questions page elements
// questions
// bonustime time
startPageEl = document.querySelector("#landingPage");
landingPageEl = document.querySelector("#Questions");
questionsEl = document.querySelector("#qQuestions");
bonusTimeEl = document.querySelector("#bonusAdded");
// answers
answersEl = document.querySelector("#choices");
questionsArrays = [
  {
    title: "What is the profession of Tanel's father?",
    options: ["Doctor", "Electrician", "Bricklayer", "Builder"],
    answer: "Builder",
  },
  {
    title: "What is the profession of Tanel's mother?",
    options: ["Housewife", "Beautician", "Computer Engineer", "Architect"],
    answer:"Beautician",
  },
  {
    title: "What is the profession of Tanel's sister?",
    options: ["Housewife", "Beautician", "Computer Engineer", "Architect"],
    answer: "Architect",
  },
];

let begin = document.querySelector("#landingPage");
let scorres = document.querySelector('#scores');


// variables elements html to js's

// start up page
let secondsleft = 20;
let startPageMode = true;
pageMode();

beginButton.addEventListener("click", function () {
  console.log("xx");
  begin.setAttribute("class","invisible");
  scorres.setAttribute("class","invisible");
  landingPageEl.setAttribute("class","visible");
  renderQA()
});


// Questions

let currentIndex = 0;

function showQuestion(){
    let showQuestion = questionsEl.textContent = questionsArrays[currentIndex];
    let currentchoices = questionsArrays[currentIndex].choices;
    // console.log(currentchoices);

}

function renderQA () {
  questionsEl.innerHTML = "";
  answersEl.innerHTML = "";
  let questionH3 = document.createElement("h3");
  questionH3.textContent = questionsArrays[currentIndex].title;
  questionsEl.append(questionH3);

  questionsArrays[currentIndex].options.forEach(function(option, index){
      let buttonEl = document.createElement("button");
      buttonEl.setAttribute('class','choices');
      buttonEl.setAttribute('id', index);
      buttonEl.setAttribute('value', option);
      buttonEl.textContent = option;
      buttonEl.onclick = checkAnswer;
      answersEl.append(buttonEl);
  });
}

function checkAnswer(){

  // console.log('check answer')
  if(questionsArrays[currentIndex].answer == this.value) {
    console.log('correct')
    currentIndex++;
    renderQA()
  } else {
    console.log('wrong')
  }
}

bonusTimeEl.innerHTML = "";
timerEl.addEventListener('click', function(event){
    console.log(event.target.id);
    let buttonIndex = event.target.id;

    if(buttonIndex == questionsArrays[currentIndex].answer){
        console.log("You are correct");
        secondsleft = secondsleft + 8;
        bonusTimeEl.innerHTML = "+8";
        bonusAddedTimer();
        currentIndex++;
        showQuestion();
    }
})

function bonusAddedTimer(){
    setInterval(function(){
        bonusTimeEl.innerHTML = "";
    },1000)
}
// timer function

// page mode function ın order hide question page

function pageMode() {
  if (landingPage === true) {
    //replace empty with startpage
    questionsEl.style.display = "none"; //questionspage display none
    startPageEl.style.display = "block"; //landingpage display default
  } else if (qQuestions === false) {
    //replace empty with questionspage
    questionsEl.style.display = "block"; //questionspage display default
    startPageEl.style.display = "none"; //landingpage display none
  }
}

function init() {
  startPageMode();
  countdown();
}

// add listener when clicking strat start the page //functıon for clıck
// create an array of q's and answers


// 