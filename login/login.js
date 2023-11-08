var inputName = document.getElementById("playername");
var inputNick = document.getElementById("player-nick");
var submitBtn = document.getElementById("submit");

inputName.addEventListener("input", checkInput);
inputNick.addEventListener("input", checkInput);

function checkInput() {
    if (inputName.value.length > 0 && inputNick.value.length > 0) {
        submitBtn.removeAttribute("disabled");

        // inorder to get name of the player in highscore page
        localStorage.setItem("playerData", inputNick.value);
    } else {
        submitBtn.setAttribute("disabled", "disabled");
    }
}
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(){
    window.location.href = "../instuction/instruction.html"
}