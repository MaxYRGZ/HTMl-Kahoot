const questions = [
    {
        question: "¿Qué representa la etiqueta <p> en HTML?",
        answers: [
            { text: "Párrafo", correct: true },
            { text: "Página", correct: false },
            { text: "Imagen", correct: false },
            { text: "Imprimir", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para el encabezado más grande en HTML?",
        answers: [
            { text: "<h1>", correct: true },
            { text: "<h3>", correct: false },
            { text: "<h5>", correct: false },
            { text: "<header>", correct: false }
        ]
    },
    {
        question: "¿Qué define la etiqueta <a> en HTML?",
        answers: [
            { text: "Enlace (Anchor)", correct: true },
            { text: "Artículo", correct: false },
            { text: "Audio", correct: false },
            { text: "Alerta", correct: false }
        ]
    },
    {
        question: "¿Cuál es la etiqueta correcta para insertar un salto de línea en HTML?",
        answers: [
            { text: "<br>", correct: true },
            { text: "<break>", correct: false },
            { text: "<lb>", correct: false },
            { text: "<line>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para definir una lista desordenada en HTML?",
        answers: [
            { text: "<ul>", correct: true },
            { text: "<li>", correct: false },
            { text: "<ol>", correct: false },
            { text: "<list>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para definir una lista ordenada en HTML?",
        answers: [
            { text: "<ol>", correct: true },
            { text: "<ul>", correct: false },
            { text: "<li>", correct: false },
            { text: "<list>", correct: false }
        ]
    },
    {
        question: "¿Cuál es la etiqueta correcta para insertar una imagen en HTML?",
        answers: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false },
            { text: "<src>", correct: false },
            { text: "<picture>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para definir una tabla en HTML?",
        answers: [
            { text: "<table>", correct: true },
            { text: "<tr>", correct: false },
            { text: "<td>", correct: false },
            { text: "<tab>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta define los datos de una tabla en HTML?",
        answers: [
            { text: "<td>", correct: true },
            { text: "<tr>", correct: false },
            { text: "<th>", correct: false },
            { text: "<data>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para definir una fila de tabla en HTML?",
        answers: [
            { text: "<tr>", correct: true },
            { text: "<td>", correct: false },
            { text: "<th>", correct: false },
            { text: "<row>", correct: false }
        ]
    },
    {
        question: "¿Cuál es la etiqueta correcta para texto enfatizado en HTML?",
        answers: [
            { text: "<em>", correct: true },
            { text: "<strong>", correct: false },
            { text: "<i>", correct: false },
            { text: "<italic>", correct: false }
        ]
    },
    {
        question: "¿Cuál es la etiqueta correcta para poner texto en negrita en HTML?",
        answers: [
            { text: "<b>", correct: true },
            { text: "<strong>", correct: false },
            { text: "<bold>", correct: false },
            { text: "<stronger>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta define el título de una página web en HTML?",
        answers: [
            { text: "<title>", correct: true },
            { text: "<meta>", correct: false },
            { text: "<head>", correct: false },
            { text: "<header>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para definir un bloque de contenido separado en HTML?",
        answers: [
            { text: "<div>", correct: true },
            { text: "<span>", correct: false },
            { text: "<section>", correct: false },
            { text: "<aside>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para contenido en línea en HTML?",
        answers: [
            { text: "<span>", correct: true },
            { text: "<div>", correct: false },
            { text: "<inline>", correct: false },
            { text: "<section>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta define los metadatos de un documento HTML?",
        answers: [
            { text: "<meta>", correct: true },
            { text: "<head>", correct: false },
            { text: "<title>", correct: false },
            { text: "<body>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta define un formulario en HTML?",
        answers: [
            { text: "<form>", correct: true },
            { text: "<input>", correct: false },
            { text: "<submit>", correct: false },
            { text: "<button>", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta se utiliza para definir un campo de entrada en un formulario?",
        answers: [
            { text: "<input>", correct: true },
            { text: "<form>", correct: false },
            { text: "<submit>", correct: false },
            { text: "<button>", correct: false }
        ]
    },
    {
        question: "¿Qué contiene la etiqueta <head> en un documento HTML?",
        answers: [
            { text: "Metadatos", correct: true },
            { text: "Contenido principal", correct: false },
            { text: "Pie de página", correct: false },
            { text: "Encabezado", correct: false }
        ]
    },
    {
        question: "¿Qué etiqueta define el contenido principal de un documento HTML?",
        answers: [
            { text: "<body>", correct: true },
            { text: "<main>", correct: false },
            { text: "<content>", correct: false },
            { text: "<section>", correct: false }
        ]
    }
];

let playerName = "";
let score = 0;
let currentQuestionIndex = 0;
let shuffledQuestions = [];
const leaderboard = [];

// Obtiene elementos del DOM
const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const endScreen = document.getElementById('end-screen');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const finalScoreElement = document.getElementById('final-score');
const leaderboardBody = document.getElementById('leaderboard-body');
const playerNameElement = document.getElementById('player-name');

// Configuración de Firebase (asegúrate de incluir tu configuración)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Formulario para ingresar el nombre
const nameForm = document.getElementById('name-form');
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    playerName = document.getElementById('name').value;
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    startQuiz();
});

// Función para iniciar el quiz
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    setNextQuestion();
}

// Función para mostrar la siguiente pregunta
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Función para mostrar una pregunta y sus opciones
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

// Función para limpiar el estado
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Función para manejar la selección de respuesta
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.classList.remove('hide');
}

// Función para establecer el estado de la respuesta
function setStatusClass(element, correct) {
    element.classList.add(correct ? 'correct' : 'wrong');
}

// Función para avanzar a la siguiente pregunta
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showScore();
    }
});

// Función para mostrar la puntuación final
function showScore() {
    quizContainer.style.display = 'none';
    endScreen.style.display = 'block';
    finalScoreElement.innerText = `Tu puntuación: ${score} de ${shuffledQuestions.length}`;
    saveScore(); // Guarda el puntaje en Firebase
    updateLeaderboard(); // Muestra el leaderboard
}

// Función para guardar el puntaje en Firestore
function saveScore() {
    const scoreEntry = { name: playerName, score: score };
    db.collection('scores').add(scoreEntry)
        .then(() => {
            console.log('Puntaje guardado');
        })
        .catch((error) => {
            console.error('Error al guardar el puntaje:', error);
        });
}

// Función para actualizar el leaderboard
function updateLeaderboard() {
    db.collection('scores').orderBy('score', 'desc').get()
        .then((querySnapshot) => {
            leaderboardBody.innerHTML = '';
            querySnapshot.forEach((doc) => {
                const entry = doc.data();
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const scoreCell = document.createElement('td');
                nameCell.innerText = entry.name;
                scoreCell.innerText = entry.score;
                row.appendChild(nameCell);
                row.appendChild(scoreCell);
                leaderboardBody.appendChild(row);
            });
        })
        .catch((error) => {
            console.error('Error al obtener el leaderboard:', error);
        });
}

// Para reiniciar el quiz
const restartButton = document.getElementById('restart-btn');
restartButton.addEventListener('click', () => {
    endScreen.style.display = 'none';
    startScreen.style.display = 'block';
});
