let boxes = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let reset = document.getElementById("reset");
let turn0 = true;
let count = 0;
const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (turn0) {
            box.innerText = "0";
            console.log(box.innerHTML);
            turn0 = false;
        }
        else {
            box.innerText = "X";
            console.log(box.innerHTML);
            turn0 = true;
        }
        box.disabled = true;
        count++
        let isWin = checkWinners();
        if (count == 9 && !isWin) {
            msg.innerHTML = "Match is draw";
            msg.style.fontSize = "8vh";
            msg.style.color = "yellow";

        }
    })

})
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const checkWinners = () => {
    for (let win of winning) {
        let pat1Val = boxes[win[0]].innerText;
        let pat2Val = boxes[win[1]].innerText;
        let pat3Val = boxes[win[2]].innerText;

        if (pat1Val != "" && pat2Val != "" && pat3Val != "") {
            if (pat1Val == pat2Val && pat2Val == pat3Val) {
                msg.style.fontSize = "8vh";
                msg.style.color = "yellow";
                msg.innerHTML = `Congratulations, ${pat1Val} is winning the game`;
                disableBoxes();
                return 1;
            }

        }
    }

}
function enableBoxes() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
  msg.innerText="";
}

reset.addEventListener('click', () => {
    turn0 = true;
    count = 0;
    enableBoxes();

})