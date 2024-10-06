const Decrementbtn=document.getElementById("Decrementbtn");
const Incrementbtn=document.getElementById("Incrementbtn");
const zero=document.getElementById("displayValue");
const Resetbtn=document.getElementById("Resetbtn");

//for decrement button click
Decrementbtn.addEventListener("click",()=>{
    const value = Number(displayValue.innerText);
    if (value > 0) {
      displayValue.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  

});

//for increment button click
Incrementbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });
  
  // for reset button click
  Resetbtn.addEventListener("click", () => {
    displayValue.innerText = 0;
  });
  



