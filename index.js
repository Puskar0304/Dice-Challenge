
let btn = document.querySelector(".btnc");

btn.addEventListener("click", function() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "./dice" + randomNumber1 + ".png";
let randomImage2 = "./dice" + randomNumber2 + ".png";

document.querySelector("#img1").src = randomImage1;
document.querySelector("#img2").src = randomImage2;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins 🚩";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins 🚩";
}

else {
    document.querySelector("h1").innerHTML = "Draw";
}
});