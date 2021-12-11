function biggerCall(){
alert("Hello, World!");
document.getElementById("text").style.fontSize="24pt";
}

function fancifyCall(){
   if(document.getElementById("fancy").checked){
    document.getElementById("text").style.fontWeight="bold";
    document.getElementById("text").style.color="blue";
    document.getElementById("text").style.textDecoration="underline";
   }
   else{
    document.getElementById("text").style.fontWeight="normal";
    document.getElementById("text").style.color="black";
    document.getElementById("text").style.textDecoration="none";
   }
}

function mooCall(){
  var str = document.getElementById("text");
  var parts = str.value.split(" ");
  str.value = parts.join("-Moo.");
}
