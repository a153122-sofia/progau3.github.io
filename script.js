const questions = [
    {
        question: "¿Cuál es el hueso más largo del cuerpo?",
        options: ["Fémur", "Húmero", "Tibia", "Radio"],
        answer: "Fémur"
    },
    {
        question: "¿Dónde se encuentra el corazón?",
        options: ["Abdomen", "Tórax", "Cabeza", "Espalda"],
        answer: "Tórax"
    },
    {
        question: "¿Cuántos pulmones tiene el ser humano?",
        options: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "¿Qué órgano bombea la sangre?",
        options: ["Pulmón", "Hígado", "Corazón", "Riñón"],
        answer: "Corazón"
    },
    {
        question: "¿Cuál es el órgano más grande del cuerpo?",
        options: ["Cerebro", "Piel", "Hígado", "Pulmón"],
        answer: "Piel"
    }
];

let currentQuestion = 0;
let score = 0;

// Elementos
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz");
const resultScreen = document.getElementById("result");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

// Iniciar quiz
function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

// Cargar pregunta
function loadQuestion() {
    feedbackEl.textContent = "";
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

// Revisar respuesta
function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        feedbackEl.textContent = "✅ Correcto";
        score++;
    } else {
        feedbackEl.textContent = "❌ Incorrecto";
    }
}

// Siguiente
nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

// Resultado final
function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    document.getElementById("score").textContent =
        `Tu puntaje fue: ${score} / ${questions.length}`;
}
