const one=document.querySelectorAll(".one")
const cross=document.querySelector(".x");
const  res=document.getElementById("res")
one.forEach((x)=>{
    x.addEventListener('click',function(){
        res.style.display="block"
        
    
    })
})

cross.addEventListener('click',function(){
    res.style.display="none"

})
function closeModel(e){
  if(e.key=='Escape'){
    res.style.display="none"

  }
}
document.addEventListener('keydown',closeModel)
