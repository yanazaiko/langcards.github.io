

const flashcards = [
    { word: "cemetery", translation: "кладовище" },
    { word: "deer", translation: "олень" },
    { word: "vacuum cleaner", translation: "пилосмок" },
    { word: "mail", translation: "пошта" },
    { word: "bed", translation: "ліжко" },
    { word: "desert", translation: "пустеля" },
    { word: "elephant", translation: "слон" },
    { word: "torch", translation: "ліхтарик" },
    { word: "triangle", translation: "трикутник" },
    { word: "eye", translation: "око" },
];

let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;


const questionElement = document.getElementById("question");
const progressElement = document.getElementById("progress");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");
const answerInput = document.getElementById("answer-input");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const flashcardContainer = document.querySelector(".card");
const messageElement = document.getElementById("message");


function updateCard() {
    questionElement.textContent = flashcards[currentIndex].word;
    progressElement.textContent = `${currentIndex + 1}/${flashcards.length}`;
    answerInput.value = "";
    messageElement.textContent = "";
    flashcardContainer.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
}


answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = flashcards[currentIndex].translation.toLowerCase();

        if (userAnswer === correctAnswer) {
            correctCount++;
            flashcardContainer.style.boxShadow = "0 4px 20px rgba(0, 255, 0, 0.8)"; 
            messageElement.textContent = "Правильно!";
            messageElement.style.color = "green";
            correctCountElement.textContent = correctCount;

           
            setTimeout(() => {
                if (currentIndex < flashcards.length - 1) {
                    currentIndex++;
                    updateCard();
                } else {
                    messageElement.textContent = "Ви завершили всі картки!";
                }
            }, 1000);
        } else {
            incorrectCount++;
            flashcardContainer.style.boxShadow = "0 4px 20px rgba(255, 0, 0, 0.8)"; 
            messageElement.textContent = `Неправильно! Правильна відповідь: ${correctAnswer}`;
            messageElement.style.color = "red";
            incorrectCountElement.textContent = incorrectCount;
        }
    }
});


prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        updateCard();
    }
});


updateCard();
