function checkAnswer() {
    // Function body
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value
    let paragraph = document.getElementById("feedback");

    if (userAnswer === correctAnswer){
        paragraph.textContent = "Correct! Well done.";
    }
   
    else{
        paragraph.textContent = "That's incorrect. Try again!";
    }

}

let submit = document.getElementById("submit-answer");
    submit.addEventListener('click',checkAnswer);


