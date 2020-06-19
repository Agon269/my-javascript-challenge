//add an event listner to the whole page , get the key pressed using event and then call playSound function
document.addEventListener("keypress",function(event){  
var currentKey=event.key;

playSound(currentKey);
animate(currentKey);

})





//using the key passed plays diffrent sounds using switch statement
function playSound(key){


switch(key){


  case'a': var audio=new Audio("sounds/boom.wav");
           audio.play();
           break;

  case's': var audio=new Audio("sounds/clap.wav");
           audio.play();
           break;

  case'd': var audio=new Audio("sounds/hihat.wav");
           audio.play();
           break;

  case'f': var audio=new Audio("sounds/kick.wav");
           audio.play();
           break;

  case'g': var audio=new Audio("sounds/openhat.wav");
           audio.play();
           break;

  case'h': var audio=new Audio("sounds/ride.wav");
           audio.play();
           break;

  case'j': var audio=new Audio("sounds/snare.wav");
           audio.play();
           break;
  case'k': var audio=new Audio("sounds/tink.wav");
           audio.play();
           break;
  case'l': var audio=new Audio("sounds/tom.wav");
           audio.play();
           break;

   default:console.log("default");


}
   
}

//adding animation to the button selected by adding a class and removing it with timeout

function animate(key){
var active=document.querySelector("."+key).classList.add("animation");

setTimeout(function(){

var active=document.querySelector("."+key).classList.remove("animation");
},200);

}
