let Eq =document.getElementById("equal-el")
 function calcNumbers(result){
 form.displayResult.value=form.displayResult.value+result;
 }
 function Clear(){
   form.displayResult.value=" ";
 }
 function equalTo(){
   form.displayResult.value = eval(form.displayResult.value)
 }
 function Delet(){
   let Del = document.form.displayResult.value;
   document.form.displayResult.value = Del.substring(0, Del.length - 1);
 }