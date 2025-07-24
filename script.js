const questions = [
  {
    question: "Qual seu estilo?",
    options: ["Elegante", "Despojado", "Esportivo", "Criativo"],
  },
  {
    question: "Você prefere...",
    options: ["Cinema", "Palco", "Internet", "Estádio"],
  },
  {
    question: "Como você lida com a fama?",
    options: ["Amo", "Suporto", "Evito", "Transformo em influência"],
  },
  {
    question: "Qual dessas cidades você moraria?",
    options: ["Los Angeles", "Paris", "Rio de Janeiro", "Tóquio"],
  }
];

const results = [
  "Você seria como Beyoncé: carismático e poderoso!",
  "Você seria como Neymar: esportivo e polêmico!",
  "Você seria como Anitta: ousado e internacional!",
  "Você seria como Whindersson Nunes: autêntico e engraçado!"
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.querySelector("button").style.display = "none";
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    const title = document.createElement("h2");
    title.textContent = q.question;
    container.appendChild(title);

    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        score += index;
        currentQuestion++;
        showQuestion();
      };
      container.appendChild(btn);
    });
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<h2>${results[score % results.length]}</h2>`;
}
