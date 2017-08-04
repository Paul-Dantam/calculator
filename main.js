var buttons = document.querySelectorAll(".button");
var onScreen = document.querySelector(".screen");
var clearButton = document.querySelector("#clear");
var sqrtButton = document.querySelector("#sqrt");
var equalsButton = document.querySelector(".equals");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (!button.className.includes("noDisplay")) {
            onScreen.innerHTML += button.innerHTML;
        }
    });
});

clearButton.addEventListener("click", function (e) {
    onScreen.innerHTML = "";
});
sqrtButton.addEventListener("click", function (e) {
    onScreen.innerHTML = eval(Math.sqrt(onScreen.innerHTML));
});
equalsButton.addEventListener("click", function (e) {
    onScreen.innerHTML = eval(onScreen.innerHTML);
});