let isDobOpen=false;
let dateOfBirth;
const settingCog=document.getElementById("settingIcon");
const settingContentEl=document.getElementById("settingsContent");
const initialTextEl=document.getElementById("initialText");
const afterDobBtnTxtEl=document.getElementById("afterDobBtn");
const dobBtn=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");


const yearEl=document.getElementById("year");
const monthEl=document.getElementById("month");
const dayEl=document.getElementById("day");
const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minute");
const secondEl=document.getElementById("second");



const makeTwoDigitNum=(num)=>{
    return num>9 ? num : `0${num}`;
};
const toggleDateOgBirthSel=()=>{
    if(isDobOpen){
        settingContentEl.classList.add("hide");
    }else{
        settingContentEl.classList.remove("hide");

    }
    isDobOpen = !isDobOpen
    console.log("Toggle",isDobOpen);
};
const upDateAge=()=>{
    const currentDate=new Date();
    const dateDiff=currentDate-dateOfBirth;
    const year=Math.floor(dateDiff/(1000*60*60*24*365));
    const month=Math.floor(dateDiff/(1000*60*60*24*365))%12;
    const day=Math.floor(dateDiff/(1000*60*60*24))%30;
    const hour=Math.floor(dateDiff/(1000*60*24))%24;
    const minute=Math.floor(dateDiff/(1000*60))%60;
    const second=Math.floor(dateDiff/(1000))%60;
    
    yearEl.innerHTML=makeTwoDigitNum(year);
    monthEl.innerHTML=makeTwoDigitNum(month);
    dayEl.innerHTML=makeTwoDigitNum(day);
    hourEl.innerHTML=makeTwoDigitNum(hour);
    minuteEl.innerHTML=makeTwoDigitNum(minute);

    secondEl.innerHTML=makeTwoDigitNum(second);

    // console.log("dateDiff",dateDiff);
}

const setDobHandler = ()=>{
    dateString= dobInputEl.value;
   dateOfBirth=dateString ? new Date(dateString):null;

const year=localStorage.getItem("year");
const month=localStorage.getItem("month");
const date=localStorage.getItem("date");
if(year && month && date){
    dateOfBirth= new Date(year,month,date) 
}
   if(dateOfBirth){

        localStorage.setItem("year",dateOfBirth.getFullYear());
        localStorage.setItem("month",dateOfBirth.getMonth());
        localStorage.setItem("date",dateOfBirth.getDate());


    initialTextEl.classList.add("hide");
    afterDobBtnTxtEl.classList.remove("hide");
    setInterval(()=>upDateAge(),1000);

}else{
    afterDobBtnTxtEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
}
};
setDobHandler();


settingCog.addEventListener("click",toggleDateOgBirthSel)
dobBtn.addEventListener("click",setDobHandler);
