const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=(parseInt(document.getElementById('height').value));
    const weight=(parseInt(document.getElementById('width').value));
    const result=document.getElementById('result');

   if(height==='' || height<0 || isNaN(height)){
      result.innerHTML=`please give valid height ${height}`
   }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML=`please give valid weight ${weight}`
 }
 else{
    const bmi=(weight/(height*height/1000)).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`
 }
})