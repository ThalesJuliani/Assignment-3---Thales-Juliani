// ==================================================
//                 BEGIN THE CODE
// ==================================================
//global variable - ok
/* let continentArr = []; */
// ==================================================
// addEventListener over dropdown menu  - OK
// ==================================================
const btnScroll = document.getElementById("mybtnScroll");
// ==================================================
//Scroll down event + get continent value + fetch api + print table - ok
// ==================================================
btnScroll.addEventListener("click", function (e) {
  e.preventDefault();

  const continent = document.getElementById("continent");
  const namecontinent = continent.value;
  console.log(namecontinent)
  console.log("btn ok")

  // ==================================================
  // Const for API address and Let to receive drop dow menu value - ok
  // ==================================================
  const baseRegion = "https://restcountries.com/v3.1/region/";
  let region = continent.value;
  // ==================================================
  // Async Await Function - OK
  // ==================================================
  async function getDataRegion() {
    const results = await fetch(baseRegion + region);
    const data = await results.json();
    /*    console.log(data); */
    let countryData = data;
    // ==================================================
    //  Run over the array and print table - OK
    // ==================================================

    for (let i = 0; i < countryData.length; i++) {
      let nameOfCountry = countryData[i].name.common

      let row = movieTBody.insertRow(0)

      let cell1 = row.insertCell(0)
      let cell2 = row.insertCell(1)

      cell1.innerHTML = countryData[i].name.common
      cell2.innerHTML = `<button class="goPopUp"> <a href="" "id=${i}"> ${nameOfCountry}</a> </button>`

    };
    // ==================================================
    //run over country name <a>, check it and window alert - OK
    // ==================================================
    let countryButtonsclick = document.querySelectorAll('a');

    for (let index = 0; index < countryButtonsclick.length; index++) {
      const countryLink = countryButtonsclick[index];

      countryLink.addEventListener('click', function (e) {
        e.preventDefault();

        let countryName = "";
        let flag = "";
        let capital = "";
        let area = "";
        let population = "";
        let currencies = [];
        let linkToMap = "";

        for (let i = 0; i < countryData.length; i++) {

          if (countryData[i].name.common == countryLink.innerText) {
            countryName = countryData[i].name.common;
            flag = countryData[i].flag.png;
            capital = countryData[i].capital;
            area = countryData[i].area;
            population = countryData[i].population;
            currencies = countryData[i].currencies;
            linkToMap = countryData[i].maps.googleMaps;
          }

        }

        console.log(countryName);
        console.log(flag);
        console.log(capital);
        console.log(area);
        console.log(population);
        console.log(currencies);
        console.log(linkToMap);

        // ==================================================
        // window alert - OK
        // ==================================================
        window.alert(
          "The Name of the country is:" + " " + countryName + " ," +
          " Capital is:" + " " + capital + " , " +
          " Total Area is:" + " " + area + " , " +
          " Population is:" + " " + population + " , " +
          " Currency is:" + " " + currencies + " , " +
          " Google Maps is:" + ", " + linkToMap +
          " Flag" + " : " + flag
        )

      })
    }
  } getDataRegion()
}
)


