//get :root from css
var root=document.querySelector(':root');


//put a variable in to color input
var input=document.querySelector('.col');
//we get the value of the color input and set property of --base by  adding an event listener and using 'change' event 
input.addEventListener('change',(e)=>
		root.style.setProperty('--base',e.target.value));



var input1=document.querySelector('.blur');
//we get the value  and set property of -blur by  adding an event listener and using 'mousemove' event 
input1.addEventListener('mousemove',(e1)=>
		root.style.setProperty('--blur',e1.target.value+"px"));



var input2=document.querySelector('.space');

input2.addEventListener('mousemove',(e1)=>
		root.style.setProperty('--spacing',e1.target.value+"px"));