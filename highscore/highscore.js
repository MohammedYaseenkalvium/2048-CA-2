document.addEventListener("DOMContentLoaded", function() {
    const currentScoreElement = document.getElementById("currentScore");
    const highScoreElement = document.getElementById("highScore");

    const currentScore = localStorage.getItem("score") || 0;
    const highScore = localStorage.getItem("highscore") || 0;

    currentScoreElement.innerText = currentScore;
    highScoreElement.innerText = highScore;
});