
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
   const p = document.querySelector('p');
    function makeGreen() {
   
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
   console.log("hello");
    // Interpolated
   console.log("hello %s string!","you");
    // Styled
   console.log("%c i am  here","font-size:20px");
    // warning!
    console.warn('well');
    // Error :|
    console.error("what happened");
    // Info
    console.info("i am trying to sharpen my JS");
    // Testing
    console.assert(1===2,"that is wrong");
    // clearing
    console.clear();
    // Viewing DOM Elements
      console.dir(p);
      console.log(p);
    // Grouping together
  dogs.forEach(dog=>{
console.groupCollapsed( `${dog.name}`);
console.log(`this is ${dog.name}`);
console.log(` ${dog.name} is  ${dog.age} years old`);
console.log(` ${dog.name} is  ${dog.age *7} dog years old`);
console.groupEnd(`${dog.name}`);
})
    // counting

console.count("west");
console.count("west");
console.count("steve");
console.count("steve");
console.count("steve");
console.count("west");
console.count("west");
console.count("steve");
console.count("west");


    // timing

console.time("fetching data");
fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
.then(data=>data.json())
.then(data=>{

  console.timeEnd("fetching data");
  console.log(data);
})
console.table(dogs);