const questions = [
    {
        question: "<img src='blackholeq.png' style='max-height: 80px'; 'max-width: 50%'>",
        optionA: "BLACK HOLE",
        optionB: "BLACK JACK", 
        correctOption: "optionA"
    },

    {
        question: "<img src='ctiga.png' style='max-height: 55px'; >",
        optionA: "10",
        optionB: "3", 
        correctOption: "optionB"
    },

    {
        question: "<img src='em.png' style='max-height: 55px'; >",
        optionA: "T",
        optionB: "M", 
        correctOption: "optionB"
    },

    {
        question: "<img src='marsq.png' style='max-height: 55px'; >",
        optionA: "MARS",
        optionB: "MOON", 
        correctOption: "optionA"
    },

    {
        question: "<img src='forgetmenotq.png' style='max-height: 55px'; >",
        optionA: "HELLO WORLD",
        optionB: "FORGET ME NOT", 
        correctOption: "optionB"
    },

    {
        question: "<img src='morninggloryq.png' style='max-height: 55px'; >",
        optionA: "OLD TESTAMENT",
        optionB: "MORNING GLORY", 
        correctOption: "optionB"
    },

    {
        question: "<img src='carrotq.png' style='max-height: 55px'; >",
        optionA: "CARROT",
        optionB: "CANDY", 
        correctOption: "optionA"
    },

    {
        question: "<img src='daikonq.png' style='max-height: 55px'; >",
        optionA: "DANIEL",
        optionB: "DAIKON", 
        correctOption: "optionB"
    },

    {
        question: "<img src='jicamaq.png' style='max-height: 55px'; >",
        optionA: "JICAMA",
        optionB: "JAVA", 
        correctOption: "optionA"
    },

    {
        question: "<img src='yamq.png' style='max-height: 55px'; >",
        optionA: "YAM",
        optionB: "ZOE",
        correctOption: "optionA"
    },

    {
        question: "<img src='firetruckq.png' style='max-height: 55px'; >",
        optionA: "DUMP TRUCK",
        optionB: "FIRE TRUCK", 
        correctOption: "optionB"
    },

    {
        question: "<img src='vanq.png' style='max-height: 55px'; >",
        optionA: "VAN",
        optionB: "WAN", 
        correctOption: "optionA"
    },

    {
        question: "<img src='kiwiq.png' style='max-height: 55px'; >",
        optionA: "REST",
        optionB: "KIWI", 
        correctOption: "optionB"
    },

    {
        question: "<img src='cockq.png' style='max-height: 55px'; >",
        optionA: "BIRD",
        optionB: "COCK", 
        correctOption: "optionB"
    },

    {
        question: "<img src='owlq.png' style='max-height: 55px'; >",
        optionA: "OWL",
        optionB: "ONE", 
        correctOption: "optionA"
    },

    {
        question: "<img src='uu.png' style='max-height: 55px'; >",
        optionA: "U",
        optionB: "Z", 
        correctOption: "optionA"
    },

    {
        question: "<img src='asatu.png' style='max-height: 55px'; >",
        optionA: "0",
        optionB: "1", 
        correctOption: "optionB"
    },

    {
        question: "<img src='ex.png' style='max-height: 55px'; >",
        optionA: "X",
        optionB: "T", 
        correctOption: "optionA"
    },

    {
        question: "<img src='jmodehuruf.png' style='max-height: 55px'; >",
        optionA: "LETTER MODE",
        optionB: "NUMBER MODE", 
        correctOption: "optionA"
    },

    {
        question: "<img src='restspasi.png' style='max-height: 55px'; >",
        optionA: "NUMBER MODE",
        optionB: "REST / SPACE", 
        correctOption: "optionB"
    },

    {
        question: "<img src='nol.png' style='max-height: 55px'; >",
        optionA: "ZERO",
        optionB: "LION", 
        correctOption: "optionA"
    },

    {
        question: "<img src='ka.png' style='max-height: 55px'; >",
        optionA: "J",
        optionB: "K", 
        correctOption: "optionB"
    },

    {
        question: "<img src='we.png' style='max-height: 55px'; >",
        optionA: "A",
        optionB: "W", 
        correctOption: "optionB"
    },

    {
        question: "<img src='hdelapan.png' style='max-height: 55px'; >",
        optionA: "8",
        optionB: "5", 
        correctOption: "optionA"
    },

    {
        question: "<img src='zet.png' style='max-height: 55px'; >",
        optionA: "Z",
        optionB: "0", 
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index];
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB; 

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000) 
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000) 
        }
    }) 
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 19) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 13) {
        remark = "You need more practice"
        remarkColor = "lightred"
    }
    else if (playerScore >= 14 && playerScore < 17) {
        remark = "You can do better"
        remarkColor = "orange"
    }
    else if (playerScore >= 17 && playerScore < 20) {
        remark = "Good Score"
        remarkColor = "lightgreen"
    }
    else if (playerScore = 20) {
        remark = "Perfect"
        remarkColor = "lightgreen"
    }
    const playerGrade = playerScore * 1000;

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade 
    document.getElementById('right-answers').innerHTML = playerScore + " / 20";
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
} 
//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}