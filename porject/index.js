const question = [
    {
        question: "Which is largest animal in the world?",
        answer: [{
            text: "Shark", correct: false
        },
        {
            text: "Blue Whale", correct: true
        },
        {
            text: "Elephant", correct: false
        },
        {
            text: "Giraffe", correct: false
        },
            
        ]

    },
    {
        question: "Which is the fastest land animal?",
        answer: [
            {
                text: "Cheetah", correct: true
            },
            {
                text: "Horse", correct: false
            },
            {
                text: "Lion", correct: false
            },
            {
                text: "Ostrich", correct: false
            }
        ]
    },
    {
        question: "Which bird has the largest wingspan?",
        answer: [
            { text: "Eagle", correct: false },
            { text: "Falcon", correct: false },
            { text: "Albatross", correct: true },
            { text: "Ostrich", correct: false },
        ]
    },
    {
        question: "Which is the tallest animal in the world?",
        answer: [
            { text: "Elephant", correct: false },
            { text: "Camel", correct: false },
            { text: "Kangaroo", correct: false },
            { text: "Giraffe", correct: true },

        ]
    },
    {
        question: "Which is the largest mammal in the ocean?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Dolphin", correct: false },
            { text: "Seal", correct: false },
        ]
    },
    {
        question: "Which is the fastest flying bird?",
        answer: [
            { text: "Peregrine Falcon", correct: true },
            { text: "Eagle", correct: false },
            { text: "Sparrow", correct: false },
            { text: "Hummingbird", correct: false },
        ]
    },
    {
        question: "Which animal is known as the king of the jungle?",
        answer: [
            { text: "Lion", correct: true },
            { text: "Tiger", correct: false },
            { text: "Elephant", correct: false },
            { text: "Cheetah", correct: false },
        ]
    },
    {
        question: "Which is the smallest bird in the world?",
        answer: [
            { text: "Bee Hummingbird", correct: true },
            { text: "Sparrow", correct: false },
            { text: "Parrot", correct: false },
            { text: "Robin", correct: false },
        ]
    },
    {
        question: "Which is the largest reptile?",
        answer: [
            { text: "Saltwater Crocodile", correct: true },
            { text: "Komodo Dragon", correct: false },
            { text: "Green Anaconda", correct: false },
            { text: "Alligator", correct: false },
        ]
    },
    {
        question: "Which is the most intelligent marine animal?",
        answer: [
            { text: "Dolphin", correct: true },
            { text: "Whale", correct: false },
            { text: "Shark", correct: false },
            { text: "Seal", correct: false },
        ]
    },
    {
        question: "Which is the largest species of fish?",
        answer: [
            { text: "Whale Shark", correct: true },
            { text: "Great White Shark", correct: false },
            { text: "Manta Ray", correct: false },
            { text: "Bluefin Tuna", correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}  

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer => { 
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        
    });
}


function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
    
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    }else {
        selectedBtn.classList.add('incorrect');
    }
   
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() { 
    resetState();
    questionElement.innerHTML = `You scored  ${score}  out of  ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}



nextButton.addEventListener('click', () => { 
    if (currentQuestionIndex < question.length ) {
        handleNextButton();
    } else {
        startQuiz();
    }
});




startQuiz();