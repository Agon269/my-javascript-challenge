

 //select the panels
const panels = document.querySelectorAll('.panel');

//a fucntion to toggle the open class in css

    function open() {

      this.classList.toggle("open");
    }
// //this function will be a little more complicated it responds to transitionend its is need that we specify the element
    function active(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle("open-active");
      }
    }

//adding event listeners on click
panels.forEach(function(panel){

	panel.addEventListener("click",open);
})
//adding event listeners on transitionend
panels.forEach(function(panel){

	panel.addEventListener("transitionend",active);
})




