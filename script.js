

window.onload = function() {
    var pack = document.getElementById("NamiCards");
    pack.addEventListener("click", openPack);
}

function randomNumber(min, max) { 
     return Math.floor(Math.random() * (max - min + 1) + min);
} 

function openPack() {
    // alert("open pack");
    let cardsOpened = document.getElementById("NamiCards-opened");
    while (cardsOpened.firstChild) {
        cardsOpened.firstChild.remove()
    }

    for (let i = 0; i < 11; i++) {
        /* 
            <div class="NamiCards"> 
                <img id="0">
            </div>
        */
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("NamiCards");

        let cardImg = document.createElement("img");
        cardImg.id = i;

        let num = 1;
        if (i == 10) {
            num = randomNumber(16, 25); //rare card for the last card
        } else {
            num = randomNumber(0, 15); 
        }

        cardImg.src = "./NamiCards/card(" + num.toString() + ").png";

        cardDiv.appendChild(cardImg);

        document.getElementById("NamiCards-opened").appendChild(cardDiv);
    }
}
