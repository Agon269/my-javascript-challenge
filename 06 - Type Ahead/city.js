//access the end point of the api
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var cities=[];

//fetching the data from the api to cities array
fetch(endpoint).then(blob=>blob.json()).then(data=>cities.push(...data));

//find matching words using regex 

console.log(cities);
function findMatches(word,cities){
	return cities.filter(place=>{
   
   const regex = new RegExp(word,"gi");
   return place.city.match(regex) || place.state.match(regex);

	});
}

//display the the results using the findmatches function and highligthing the values inputed wth matching result
function display(){
const matchArray= findMatches(this.value,cities);
const html=matchArray.map(place=>{
const regex = new RegExp(this.value,"gi");

const cityName=place.city.replace(regex,`<span class="hl">${this.value}</span>`);
const stateName=place.city.replace(regex,`<span class="hl">${this.value}</span>`);
	return `
  <li>
  <span class="name">${cityName},${stateName}</span>
  </li>  

	`;
}).join('');
suggestion.innerHTML=html;

}

const searchInput=document.querySelector(".search");
const suggestion=document.querySelector(".suggestions");
//calling the display function when a change or keyup occurs 
searchInput.addEventListener("change",display);
searchInput.addEventListener("keyup",display);