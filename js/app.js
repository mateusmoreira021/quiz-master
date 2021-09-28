const quizData = [
    {
        question: "Qual é o segundo planeta do sistema solar ?",
        a: "Marte",
        b: "Venus",
        c: "Plutão",
        d: "Saturno",
        correct: "b",
    },

    {
        question: "Por que o Dolar está nas nuvens ?",
        a: "O Real não vale nada",
        b: "O Brasil é um lugar de merda",
        c: "A culpa é do Batman",
        d: "Todas as respostas acima estão corretas",
        correct: "d",
    },

    {
        question: "Como melhorar de vida ?",
        a: "Me tornar um politico",
        b: "Fazer um intercâmbio",
        c: "Aprender a programar e trabalhar de qualquer lugar para qualquer lugar =D",
        d: "Abrir uma igreja e enganar os trouxas kkkkk",
        correct: "c",
    },

    {
        question: "Qual é a melhor linguagem para aprender em 2021 ?",
        a: "Python",
        b: "C++",
        c: "JavaScript <3",
        d: "Kotlin",
        correct: "c",
    },

    {
        question: "Aprender a programar é",
        a: "chato",
        b: "tanto faz",
        c: "divertido =D",
        d: "a melhor parte do meu dia",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

carregaQuiz();

function carregaQuiz(){
    respostaBranca();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function selicionAlgumaCoisa(){
    let answer = undefined;

    answerEl.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function respostaBranca(){
    answerEl.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () =>{
    const answer = selicionAlgumaCoisa();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            carregaQuiz();
        }
        else{
            quiz.innerHTML = `

                <h2>Sua resposta está correta ${score}/${quizData.length}</h2>

                <button onclick="location.reload()">Regarregar</button>
            `;
        }
    }
});