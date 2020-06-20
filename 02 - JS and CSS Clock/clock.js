//use and inteval function to update every second
setInterval(function(){ 
//get the date using js function
const time= new Date();
//get the specific second
const sec=time.getSeconds();
//transform the second into a degree
const secDegree=(((sec/60)*360)+90);

const secondHand=document.querySelector(".second-hand");
//rotate the handle using the degree we obtained
secondHand.style.transform =`rotate(${secDegree}deg)`;



const min=time.getMinutes();
const minDegree=(((min/60)*360)+90);
const minHand=document.querySelector(".min-hand");
minHand.style.transform=`rotate(${minDegree}deg)`;


const hour=time.getHours();
const hourDegree=(((hour/60)*360)+90);
const hourHand=document.querySelector(".hour-hand");
hourHand.style.transform=`rotate(${hourDegree}deg)`;




},1000);