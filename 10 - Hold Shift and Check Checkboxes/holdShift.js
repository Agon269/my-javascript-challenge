const checkboxs =document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;


function handler(e){
       let inB=false;

       if(e.shiftKey &&  this.checked){
       checkboxs.forEach(checkbox=>{
       //check if it is the last checked element or the checked element itself
       	if(checkbox==this||checkbox==lastChecked){
       		inB=!inB;
       	}
       	//if its not either check it
       	if (inB) {checkbox.checked=true;}
       })


       }
       //update the last chcked element
	lastChecked=this;
}

checkboxs.forEach(checkboxo=>{
	checkboxo.addEventListener("click",handler);
});