console.log('this is a form test file')
// const http=require('http');
// const fs =require('fs');
const tanu=36;
var form =document.getElementById("hikol");
var hanu=document.getElementById('thatimage');
 hanu.addEventListener('click',(  )=>{
console.log('the image is being clickied');
alert('this is the image of kaori miyazono');
})
form.addEventListener('submit',function(event){
     event.preventDefault()// prevents the form from autosubmitting 
    var username=document.getElementById('queryinput').value;
     window.open(username+'.html', "_self");
}) 
function count( ){

}

// var janu=document.querySelector('.queryinput').value;
// console.log(janu);