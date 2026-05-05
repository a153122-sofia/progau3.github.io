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

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

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

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        feedbackEl.textContent = "✅ Correcto";
        score++;
    } else {
        feedbackEl.textContent = "❌ Incorrecto";
    }
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent =
        `Tu puntaje fue: ${score} / ${questions.length}`;
}

// Iniciar
loadQuestion();
