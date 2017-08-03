var button
var onScreen
var equals
var parameter
var memory
var output

memory = []

onScreen = document.querySelector(".screen")

button = document.querySelectorAll(".button");
var length = button.length;

for (var i in button) {

    if (button[i].innerHTML !== "C" && button[i].innerHTML !== "=" && button[i].innerHTML !== "√") {
        button[i].addEventListener("click", function () {
            num = this.innerHTML
            output = onScreen.innerHTML += num;
        });
    } else if (button[i].innerHTML === "C") {
        button[i].addEventListener("click", function () {
            memory.push(onScreen.innerHTML);
            onScreen.innerHTML = ""
        });

    } else if (button[i].innerHTML === "=") {
        button[i].addEventListener("click", function () {
            onScreen.innerHTML = eval(onScreen.innerHTML)

        });
    }
    else if (button[i].innerHTML === "√") {
        button[i].addEventListener("click", function () {
            onScreen.innerHTML = eval(Math.sqrt(onScreen.innerHTML))
        });
    }
}


