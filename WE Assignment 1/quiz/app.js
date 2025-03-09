let quiz = [], currentQuestion = 0, timer;

function startQuiz() {
    const course = document.querySelector("#courseSelect").value.toLowerCase();
    
    if (course === "math") {
        quiz = [
            { question: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: "4", selected: "" },
            { question: "5 * 6 = ?", options: ["30", "25", "40"], answer: "30", selected: "" },
            { question: "Square root of 49?", options: ["7", "8", "9", "10"], answer: "7", selected: "" },
            { question: "10 / 2 = ?", options: ["1", "3", "5", "7"], answer: "5", selected: "" },
            { question: "12 - 8 = ?", options: ["23", "0", "4", "2"], answer: "4", selected: "" }
        ];
    } else if (course === "science") {
        quiz = [
            { question: "Water's chemical formula?", options: ["H2O", "CO2", "O2", "NO2"], answer: "H2O", selected: "" },
            { question: "Sun is a?", options: ["Planet", "Star", "Comet"], answer: "Star", selected: "" },
            { question: "Human body temperature?", options: ["37°C", "40°C", "35°C"], answer: "37°C", selected: "" },
            { question: "Gas we breathe in?", options: ["Oxygen", "Nitrogen", "Carbon dioxide"], answer: "Oxygen", selected: "" },
            { question: "Earth orbits?", options: ["Moon", "Sun", "Mars"], answer: "Sun", selected: "" }
        ];
    } else {
        quiz = [
            { question: "Who discovered America?", options: ["Columbus", "Newton", "Einstein"], answer: "Columbus", selected: "" },
            { question: "WWII ended in?", options: ["1945", "1939", "1950"], answer: "1945", selected: "" },
            { question: "Great Wall of China built by?", options: ["Qin Dynasty", "Ming Dynasty", "Tang Dynasty"], answer: "Qin Dynasty", selected: "" },
            { question: "First US President?", options: ["Lincoln", "Washington", "Jefferson"], answer: "Washington", selected: "" },
            { question: "French Revolution started in?", options: ["1789", "1804", "1765"], answer: "1789", selected: "" }
        ];
    }

    document.querySelector("#courseSelectContainer").classList.add("hidden");
    document.querySelector("#quizContainer").classList.remove("hidden");
    
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);

    if (currentQuestion >= quiz.length) {
        document.querySelector("#submitBtn").classList.remove("hidden");
        return;
    }

    if(quiz[currentQuestion].selected == ""){
        document.querySelector("#question").innerText = quiz[currentQuestion].question;

        let optionsHTML = "";
        for (let i = 0; i < quiz[currentQuestion].options.length; i++) {
            optionsHTML += `
                <label class="block bg-gray-200 text-black hover:bg-blue-500 p-2 rounded cursor-pointer">
                    <input id="option${i}" type="radio" name="answer" value="${quiz[currentQuestion].options[i]}">
                    ${quiz[currentQuestion].options[i]}
                </label>
            `;
        }
        
        document.querySelector("#optionsContainer").innerHTML = optionsHTML;

        let timeLeft = 20;
        document.querySelector("#timer").innerText = `Time left: ${timeLeft}s`;

        timer = setInterval(() => {
            timeLeft--;
            document.querySelector("#timer").innerText = `Time left: ${timeLeft}s`;

            if (timeLeft === 0) {
                clearInterval(timer);
                saveAnswer();
                nextQuestion();
            }
        }, 1000);
    }
}

function saveAnswer(){
    let options = document.getElementsByName("answer");
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            quiz[currentQuestion].selected = options[i].value;
            return;
        }
    }
    quiz[currentQuestion].selected = "N/A";
}

function nextQuestion() {
    saveAnswer();
    currentQuestion++;
    loadQuestion(); 
}

function prevQuestion() {
    if (currentQuestion > 0) currentQuestion--, loadQuestion();
}

function submitQuiz() {
    let score = 0;
    for (let i = 0; i < quiz.length; i++)
        if (quiz[i].selected == quiz[i].answer) score++;

    alert(`Quiz completed! Your score: ${score}/${quiz.length}`);
}
