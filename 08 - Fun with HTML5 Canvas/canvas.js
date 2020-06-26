const canvas= document.querySelector("#draw");
//context element of the canvas
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.strokeStyle = "#ff0000";
ctx.lineJoin="round";
ctx.lineCap="round";
ctx.lineWidth="20";

let drawing = false;
let lastX=0
let lastY=0;
let hue=0;
let dir=true;
function draw (e){
	if(!drawing) 
		{
			return
		};

	ctx.beginPath();
	ctx.strokeStyle=`hsl(${hue},100%,50%)`;
	ctx.moveTo(lastX,lastY);
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	lastX=e.offsetX;
	lastY=e.offsetY;

	
	hue++;
	if(hue>=300){hue=0;}
	if(ctx.lineWidth>=200||ctx.lineWidth<=1){
		dir=!dir;
	}
	if(dir){ctx.lineWidth++}
		else{ctx.lineWidth--}


}


canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mousedown",(e)=>{
   drawing=true;
    lastX=e.offsetX;
	lastY=e.offsetY;
	}

	);

canvas.addEventListener("mouseup",()=>drawing=false);
canvas.addEventListener("mouseout",()=>drawing=false);