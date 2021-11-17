const quizData = [
    {
        question: "How old is Chitteshwari?",
        a: "2.5",
        b: "30",
        c: "19",
        d: "15",
        correct: 'a' 
    },
    {
        question: "What is Chitteshwari most scared of?",
        a: "Insects",
        b: "Confrontation",
        c: "Failure",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "What does Chitteshwari love to do the most?",
        a: "Annoy people",
        b: "Get a crisis",
        c: "Ignore responsibilities",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "What is Chitteshwari's favourite food?",
        a: "Paneer",
        b: "Potatoes",
        c: "Chocolate",
        d: "Human brain",
        correct: "b"
    },
    {
        question: "When will you meet Chitteshwari?",
        a: "Jan 2022",
        b: "Wait..then whom did I meet yesterday?",
        c: "*cries*",
        d: "Sometime before graduation..if we ever graduate",
        correct: "c"
    }
]


const answerEls = document.querySelectorAll(".answer"); //radio buttons
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreid = document.getElementById("scoreid");

let currentQuiz = 0;
let score = 0;

loadQuiz(); // called every time the submit button is clicked

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        scoreid.innerHTML = `<h3>Your Current Score: ${score}/${currentQuiz+1}</h3>`;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h3>You've reached the end of this quiz.<br>Your final score is: ${score}/${quizData.length}</h3>
            <button onclick= 'location.reload()'>Take the quiz again</button>
            <style>
            #quiz {
                text-align: center;
                border-radius: 10px; }
            button {
                border-radius: 0 0px 10px 10px;
            }
            </style>`;
        }
    }
});