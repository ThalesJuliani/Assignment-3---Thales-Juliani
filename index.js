// ==================================================
//                 BEGIN THE CODE
// next try to define then as class methods or page level functions that interact with the user
// ==================================================
//global variable - ok
let continentArr = [];
/* console.log("continent arr" + continentArr) */
// ==================================================
// addEventListener over dropdown menu  - OK
// ==================================================
const btnScroll = document.getElementById("mybtnScroll");
// ==================================================
// fuction over button to see:
// 1 - Continent Selectec on drop down - OK
// 2 - Send the info to object and constructor - ok not using
// 3 - Async Await Function - OK
// 4 - Run over the array and print table - OK
// 5 - Create pop up and print with all infos from array with 1 country array position [4}
// purpose TEST info that is comming, printing Name, Capital, Area, population and Currency (bug) - OK 
// 6 - Create div and print image FLAGinfo from array with 1 country array position [4} purpose TEST - ok
// ==================================================
btnScroll.addEventListener("click", function (e) {
  e.preventDefault();

  const continent = document.getElementById("continent");
  const namecontinent = continent.value;
  console.log(namecontinent)
  console.log("btn ok")
  // ==================================================
  // send the info to object and constructor - ok not using
  // ==================================================
  let arryGo = new Continent(namecontinent);
  continentArr.push(arryGo);
  console.log(continentArr)
  // ==================================================
  // Const for API address and Let to receive drop dow menu value
  // ==================================================
  const baseRegion = "https://restcountries.com/v3.1/region/";
  let region = continent.value;
  // ==================================================
  // Async Await Function - OK
  // ==================================================
  async function getDataRegion(){
  const results = await fetch(baseRegion + region ); 
  const data = await results.json();
  console.log(data);

 countryData = data.results
 console.log("Country data = " + countryData);

// ==================================================
//  4 - Run over the array and print table - OK
// ==================================================

  for (let i = 5; i < data.length; i++) {
      let nameOfCountry = data[i].name.common
    
      let row = movieTBody.insertRow(0)
  
      let cell1 = row.insertCell(0)
      let cell2 = row.insertCell(1)
        
      cell1.innerHTML = data[i].name.common
      cell2.innerHTML = `<button class="blow"> <a href="id=${i}"> ${nameOfCountry}</a> </button>`
    
      
  } 

  // ==================================================
  // 6 - Create p and print with all infos from array with 1 country array position [4}
  // purpose TEST info that is comming, printing Name, Capital, Area, population and Currency (bug) - OK 
  // ==================================================

 /*  console.log(i) */
 /*  let countryData = data.results
  console.log("Country data = " + countryData) */
  /*   let arryCountries = JSON.parse(data);
  console.log("array countries = " + arryCountries) */

  console.log("aqui region");
  /* country = data.results; */
  let flag1 = data[id].flags.png
  let name1 = data[id].name.common
  let capital1 = data[id].capital
  let area1 = data[id].area
  let population1 = data[id].population
  let currencies1 = data[id].currencies.EUR
  /* country = data.results */
  // ==================================================
  // 5 - Create p and print with all infos from array with 1 country array position [4}
  // purpose TEST info that is comming, printing Name, Capital, Area, population and Currency (bug) - OK 
  // ==================================================
  var foodP = document.createElement('p')
  var foodDescription = document.createTextNode(' P = Country ' + name1 + '  Capital is  ' + capital1 + '  area total is  ' + area1 + '  population total is  ' + population1 + '  currencies is  ' + currencies1 );
  foodP.appendChild(foodDescription);
  document.body.appendChild(foodP); 

/*   // Create card and print
  var card = document.createElement('card')
  var flagApi = document.createTextNode(flag1);
  card.appendChild(flagApi);
  document.body.appendChild(card); */

  // ==================================================
  // 6 - Create div and print image FLAGinfo from array with 1 country array position [4} purpose TEST - ok
  // ======================
  var div = document.createElement('section');
  // Define the image tag and html directly and then apply to innerHTML in this way
  div.innerHTML = '<img src="' + flag1 + '" />';
  document.getElementById('block').appendChild(div);
  var result = document.getElementById('image'); 
  result.innerHTML  `<img src="${flag1}"/>`;

// ==================================================
//  2 - list all the countries of that region in your page. - TABLE
// ==================================================




} getDataRegion()
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

/* 
window.addEventListener("click", function (e){
  console.log("clicou na tela")
 
})
 */
window.addEventListener('click', function(e) {
    alert(e.target.id);
});



/* window.addEventListener("click", function(){
  document.body.style.backgroundColor = "red";
}) */

// ==================================================
// Rodando API Deutschland printing after click - - REMOVE SATURDAY
// ==================================================

const base2 = "https://restcountries.com/v3.1/all"

let country2 = []

const btn = document.getElementById("myBtn")

btn.addEventListener("click", function (e){

async function getData2(){
  const results2 = await fetch(base2); 
  const data2 = await results2.json();

  console.log(data2);
  console.log("Oi");
  console.log(data2[0].name.common)
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

  var foodP = document.createElement('p')
  var foodDescription = document.createTextNode(' Country ' + name2 + '  Capital is  ' + capital + '  area total is  ' + area + '  population total is  ' + population + '  currencies is  ' + currencies );
  foodP.appendChild(foodDescription);
  document.body.appendChild(foodP); 
// ==================================================
// Rodando API Deutschland printing after click - - REMOVE SATURDAY
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



