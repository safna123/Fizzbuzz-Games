function myFunction(event) {
    event.preventDefault(); 
         let userInput = document.getElementById("inputType").value;
             let para = document.getElementById("demo");
for(let i=1; i<=userInput; i++){
     if(i% 3 === 0 &&  i%5 ===0) {
         para.innerHTML += " " + "Fizzbuzz";
}    else if (i% 5 === 0){
         para.innerHTML += " " +"buzz";
}    else if(i %3 === 0){
         para.innerHTML += " " +"fizz";
}   else{
         para.innerHTML += " " +i;
}
 }
   } 