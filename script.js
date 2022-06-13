
beginButton = document.querySelector(".beginButton");
timerEl = document.querySelector(".#timeleft"); // timer elements
// firstpage elements 
// questions page elements 
// questions 
// bonustime time
startPageEl = document.querySelector(".#begin");
landingPageEl = document.querySelector(".#landingPage");
questionsEl = document.querySelector(".#Questions");
bonusTimeEl = document.querySelector(".#bonusAdded");
// answers
answersEl = document.querySelector(".answers");
questionsArrays = [
    {
        title: "What is the profession of Tanel's father?",
        options: ['Doctor','Electrician','Bricklayer','Builder'],
        answer: 4
    },
    
]


let begin = document.querySelector("#landingpage")

// variables elements html to js's




// start up page
let secondsleft = 20;
let startPageMode = true;
pageMode();
onclick();

//click event 

function onclick(){
    beginButton.addEventListener("click", function(){
        startPageMode = false;
        Infinity();
    });
}

// Questions 

let currentIndex = 0;

// timer function 


// page mode function ın order hide question page

function pageMode(){
    if(empty === true){                  //replace empty with startpage
        //questionspage display none
        //landingpage display default
    }else if(empty === false){          //replace empty with questionspage
        //questionspage display default
        //landingpage display none
    }
}

// add listener when clicking strat start the page //functıon for clıck
// create an array of q's and answers