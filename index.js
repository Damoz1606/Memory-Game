const emojis = ["😍", "😍", "😂", "😂", "😎", "😎", "😡", "😡", "😭", "😭", "🥶", "🥶", "🤯", "🤯", "🥱", "🥱"];

const shuffleEmojis = emojis.sort(() => Math.random() > .5 ? 2 : -1);

const startGame = (emoji) => {
    const box = document.createElement("div");
    box.classList.add("item");
    box.addEventListener("click", onClickBox);
    box.innerHTML = emoji;
    document.querySelector(".container .game").appendChild(box);
}

const updateScore = (value) => {
    const currentValue = parseInt(document.querySelector("input.score").value);
    document.querySelector("h6.score").innerHTML = currentValue + value;
    document.querySelector("input.score").value = currentValue + value;
}

const onClickBox = (event) => {
    event.target.classList.add("boxOpen");

    setTimeout(() => {
        const boxes = document.querySelectorAll(".boxOpen");
        if (boxes.length > 1) {
            if (boxes[0].innerHTML === boxes[1].innerHTML) {

                boxes[0].classList.add('boxMatch');
                boxes[1].classList.add('boxMatch');

                boxes[1].classList.remove('boxOpen');
                boxes[0].classList.remove('boxOpen');

                updateScore(1);

                if (document.querySelectorAll(".boxMatch").length === emojis.length) {
                    alert("Congrats!! You clear the game");
                    window.location.reload();
                }
            } else {
                boxes[1].classList.remove("boxOpen");
                boxes[0].classList.remove("boxOpen");
            }
        }
    }, 500);
}

shuffleEmojis.forEach((emoji) => startGame(emoji));