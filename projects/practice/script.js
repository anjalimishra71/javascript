const btn = document.querySelectorAll(".btn");
const message = document.getElementById("res");
const reset = document.querySelector(".reset");
let xtern = 1;
let count = 0;
let result = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]

btn.forEach((x) => {
    x.addEventListener('click', function () {
        if (xtern) {
            x.innerHTML = "X";
            console.log(x.innerHTML);
            xtern = 0;
        }
        else {
            x.innerHTML = "0";
            xtern = 1;
        }
        count++;
        let win = checkWinners();
        if (count == 9 && !win) {
           message.innerHTML=`Match is draw`
        }
    })
})
function disableBoxes(){
    btn.forEach((x)=>{
        x.disabled=true;
    })
}
function checkWinners() {
    for (let res of result) {
        let pat1 = btn[res[0]].innerHTML;
        let pat2 = btn[res[1]].innerHTML;
        let pat3 = btn[res[2]].innerHTML;
        if (pat1 != "" && pat2 != "" && pat3!=""){
            if(pat1==pat2 && pat2==pat3 && pat3==pat1){
                message.innerHTML=`Congratulations, ${pat1} is winning...`;
                disableBoxes();
            }
        }
    }
}
reset.addEventListener('click',function(){
    btn.forEach((x)=>{
        x.disabled=false;
        x.innerHTML="";

        count=0;
        xtern=1;
    })
    message.innerHTML="";

})