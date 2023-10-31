const emojis = ["😍", "😍", "😂", "😂", "😎", "😎", "😡", "😡", "😭", "😭", "🥶", "🥶", "🤯", "🤯", "🥱", "🥱"];

const shuffleEmojis = emojis.sort(() => Math.random() > .5 ? 2 : -1);

const startGame = (emoji) => {
    const box = document.createElement("div");
    box.classList.add("item");
    box.addEventListener("click", onClickBox);
    box.innerHTML = emoji;
    document.querySelector(".container .game").appendChild(box);
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

                if (document.querySelectorAll(".boxMatch").length === emojis.length) {
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