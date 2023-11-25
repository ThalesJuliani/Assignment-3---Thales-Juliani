// create a page that allows user to first select one of available regions  (e.g. Asia , Europe,  Oceania etc.  as mentioned at
// https://restcountries.com/#api-endpoints-v3-region 
//(REZA) fetch que retorna opções e aparecem no scroll

// and then fetch the data for that region and list all the countries of that region in your page.


// ==================================================
//                 BEGIN THE CODE
// next try to define then as class methods or page level functions that interact with the user
// ==================================================
//                 Collect all Id - ok
// ==================================================
// country name = let name2 = data2[0].name.common
// capital = let capital = data2[0].capital
// population = population
// area = area 
// one currency code = currencies
// flag image shown = let flag = data2[0].flags.png

// ==================================================
//  1- create a page that allows user to first select one of available regions  (e.g. Asia , Europe,  Oceania etc.  as mentioned at
// https://restcountries.com/#api-endpoints-v3-region 
//(REZA) fetch que retorna opções e aparecem no scroll
// ==================================================


// ==================================================
//  2 - list all the countries of that region in your page.
//  3 - make each name a clickable link and upon click on each country name
//  4 - show the flag and all details of that country in a popup that can be closed. The Details should include country name, capital, population , area, one currency code & flag image shown, as well as a link to its google map  which opens in a new window when it is clicked.
//(make sure not to show images with in the list section otherwise the page may become too slow to load )
// ==================================================

//Constructor to receive info from imput


//global variable
let continentArr = [];
// ==================================================
// //addEventListener over dropdown menu  - OK
// ==================================================
const btnScroll = document.getElementById("mybtnScroll");

btnScroll.addEventListener("click", function (e) {
  e.preventDefault();

  const continent = document.getElementById("continent");
  const namecontinent = continent.value;

  console.log(namecontinent)
  console.log("btn ok")
  // ==================================================
  // send the info to  object - ok
  // ==================================================
  let arryGo = new Continent(namecontinent);
  continentArr.push(arryGo);
  console.log(continentArr)
}
)
// ==================================================
// constructor - Class Continent  - OK
// ==================================================
class Continent {
  constructor(name) {
    this.namecontinent = name;
  }

}
// ==================================================
// send value from constructor to uuse in a let to merge with url
// ==================================================
console.log("begin region");

const baseRegion = "https://restcountries.com/v3.1/region/";
let region = "america";

async function getDataRegion(){
  const results = await fetch(baseRegion + region ); 
  const data = await results.json();

  console.log(data);

  console.log("aqui region");
  /* country = data.results; */

 
} getDataRegion()

console.log(" final region");














//Yesterday

// ==================================================
//     3 - event listener = fetch data from region ( need to analyze the API  documentation to receive back the countries)
// ==================================================
const base = "https://restcountries.com/v3.1/all"

let country = []

async function getData(){
  const results = await fetch(base); 
  const data = await results.json();

  console.log(data);

  country = data.results;

 
} getData()

/* console.log(country) */

// ==================================================
//  4 - print table with rows and all countries from that region
// ==================================================
console.log("tHALES")

// ==================================================
//  5 - make the country name clickable
// ==================================================

// ==================================================
// 6 - after click over country fetch the api back to receive the details names, capital, population, area, currency code and flag image + link Google maps */
// ==================================================

//reza = next try to define then as class methods or page level functions that interact with the user

// ==================================================
// Rodando API Deutschland printing after click
// ==================================================

const base2 = "https://restcountries.com/v3.1/name/deutschland"

let country2 = []

const btn = document.getElementById("myBtn")

btn.addEventListener("click", function (e){

async function getData2(){
  const results2 = await fetch(base2); 
  const data2 = await results2.json();

  console.log(data2);
  console.log("Oi");
  console.log(data2[0].name)
  console.log(data2[0].capital)
  console.log(data2[0].flags)
  console.log(data2[0].area)
  console.log(data2[0].population)
  console.log(data2[0].currencies)
  console.log("Foi");
  
  let flag = data2[0].flags.png
  let name2 = data2[0].name.common
  let capital = data2[0].capital
  let area = data2[0].area
  let population = data2[0].population
  let currencies = data2[0].currencies.EUR


/*   country = data.results; */ 
var foodP = document.createElement('p')
var foodDescription = document.createTextNode(' Country ' + name2 + '  Capital is  ' + capital + '  area total is  ' + area + '  population total is  ' + population + '  currencies is  ' + currencies );
foodP.appendChild(foodDescription);
document.body.appendChild(foodP);

// ==================================================
// Rodando API Deutschland printing after click
// ==================================================


var card = document.createElement('card')
var flagApi = document.createTextNode(flag);

card.appendChild(flagApi);
document.body.appendChild(card);

var div = document.createElement('div');

    // Define the image tag and html directly and then apply to innerHTML in this way
    div.innerHTML = '<img src="' + flag + '" />';

    document.getElementById('block').appendChild(div);





var result = document.getElementById('image'); 
result.innerHTML = `<img src="${flag}"/>`;






 } getData2() 
}
)
 
console.log("Final") 


// ==================================================
// addEvent Listener do receive Data from form - 
// ==================================================

/* const btn = document.getElementById("myBtn");

btn.addEventListener("click", function (e){


  async function getData3(){
    const results3 = await fetch(base); 
    const data3 = await results3.json();
     
    console.log(data3[0].name)
    console.log(data3[0].capital)
    console.log(data3[0].flags) */
    
    /* let flag = data3[0].flags
    let name3 = data3[0].name
    let capital = data3[0].capital
 */
    /*  country = data.results; */
    /* var foodP = document.createElement('p');

    var foodDescription = document.createTextNode(' Country ' + name3 + '  has  ' + capital);

    foodP.appendChild(foodDescription);
    document.body.appendChild(foodP);
 */





/*   } getData3() */




/* console.log("BTN working")



}
)
 */

