const url =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,area,cca2";

let countriesList = [];
try {
  const response = await fetch(url);
  const result = await response.json();

  countriesList = result;
} catch (error) {
  console.error(error);
}

const flagBox1 = document.getElementById("flag-box1");
const flagBox2 = document.getElementById("flag-box2");

const countryName1 = document.getElementById("country-name1");
const countryName2 = document.getElementById("country-name2");

const areaBox1 = document.getElementById("area-box1");
const areaBox2 = document.getElementById("area-box2");

const areaOutput1 = document.getElementById("area-box1");
const areaOutput2 = document.getElementById("area-box2");

const boxes = document.getElementById("boxes");

const countryBox1 = document.getElementById("country-box1");
const countryBox2 = document.getElementById("country-box2");

const next = document.getElementById("next");

const loseScreen = document.querySelector(".lose-screen");

const loseScreenScore = document.getElementById("lose-screen-score");

const loseScreenCountry1 = document.getElementById("lose-screen-country1");
const loseScreenCountry2 = document.getElementById("lose-screen-country2");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomCountry1;
let randomCountry2;

let flag1;
let flag2;

let flagSrc1;
let flagSrc2;

let area1;

let area2;

function getCountries() {
  randomCountry1 = getRandomInt(countriesList.length);

  randomCountry2 = getRandomInt(countriesList.length);

  while (randomCountry2 === randomCountry1) {
    randomCountry2 = getRandomInt(countriesList.length);
  }

  flag1 = countriesList[randomCountry1].cca2.toLowerCase();

  flag2 = countriesList[randomCountry2].cca2.toLowerCase();

  flagSrc1 = "https://flagcdn.com/w320/" + flag1 + ".jpg";

  flagSrc2 = "https://flagcdn.com/w320/" + flag2 + ".jpg";

  flagBox1.src = flagSrc1;

  flagBox2.src = flagSrc2;

  countryName1.innerHTML = countriesList[randomCountry1].name.common;
  countryName2.innerHTML = countriesList[randomCountry2].name.common;

  area1 = countriesList[randomCountry1].area;
  area2 = countriesList[randomCountry2].area;
  console.log(area1);
  console.log(area2);

  areaOutput1.classList.remove("border-red");
  areaOutput2.classList.remove("border-green");
  areaOutput2.classList.remove("border-red");
  areaOutput1.classList.remove("border-green");

  loseScreenCountry1.classList.remove("red");
  loseScreenCountry2.classList.remove("green");
  loseScreenCountry1.classList.remove("green");
  loseScreenCountry2.classList.remove("red");
}

getCountries();

let scoreOutput = document.getElementById("score");

let score = 0;

function showLoseScreen() {
  loseScreen.classList.add("show");

  loseScreenScore.innerHTML = `Score: ${score}`;

  loseScreenCountry1.innerHTML =
    countriesList[randomCountry1].name.common +
    " area: " +
    new Intl.NumberFormat("jp-JP").format(area1) +
    " km2";
  loseScreenCountry2.innerHTML =
    countriesList[randomCountry2].name.common +
    " area: " +
    new Intl.NumberFormat("jp-JP").format(area2) +
    " km2";

  countryBox1.classList.add("hide");
  countryBox2.classList.add("hide");

  scoreOutput.classList.add("hide");

  boxes.classList.remove("boxes-grid");
  boxes.classList.add("boxes-flex");

  areaOutput1.classList.add("hide");
  areaOutput2.classList.add("hide");

  areaOutput1.innerHTML = "";
  areaOutput2.innerHTML = "";

  areaOutput1.classList.remove("red");
  areaOutput2.classList.remove("green");
  areaOutput2.classList.remove("red");
  areaOutput1.classList.remove("green");
}

countryBox1.addEventListener("click", () => compareAreas(1));

countryBox2.addEventListener("click", () => compareAreas(2));

function compareAreas(e) {
  console.log(e);
  if (e === 1) {
    if (area1 > area2) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;

      areaOutput1.classList.remove("hide");
      areaOutput2.classList.remove("hide");

      areaOutput1.innerHTML =
        countriesList[randomCountry1].name.common +
        " has an area of " +
        new Intl.NumberFormat("jp-JP").format(area1) +
        " km2";
      areaOutput2.innerHTML =
        countriesList[randomCountry2].name.common +
        " has an area of " +
        new Intl.NumberFormat("jp-JP").format(area2) +
        " km2";

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      areaBox1.classList.remove("hide");
      areaBox2.classList.remove("hide");

      areaOutput1.classList.add("border-green");
      areaOutput2.classList.add("border-red");

      next.classList.remove("hide");
    } else {
      showLoseScreen();

      loseScreenCountry1.classList.add("red");
      loseScreenCountry2.classList.add("green");
    }
  } else if (e === 2) {
    if (area2 > area1) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;

      areaOutput1.classList.remove("hide");
      areaOutput2.classList.remove("hide");

      areaOutput1.innerHTML =
        countriesList[randomCountry1].name.common +
        " has an area of " +
        new Intl.NumberFormat("jp-JP").format(area1) +
        " km2";
      areaOutput2.innerHTML =
        countriesList[randomCountry2].name.common +
        " has an area of " +
        new Intl.NumberFormat("jp-JP").format(area2) +
        " km2";

      countryBox1.classList.add("hide");
      countryBox2.classList.add("hide");

      areaBox1.classList.remove("hide");
      areaBox2.classList.remove("hide");

      areaOutput1.classList.add("border-red");
      areaOutput2.classList.add("border-green");

      next.classList.remove("hide");
    } else {
      showLoseScreen();

      loseScreenCountry1.classList.add("green");
      loseScreenCountry2.classList.add("red");
    }
  }
}

const resetButton = document.getElementById("button");

resetButton.addEventListener("click", resetGame);

function resetGame() {
  scoreOutput.innerHTML = "SCORE:";

  loseScreen.classList.remove("show");

  loseScreenScore.innerHTML = "Score:";

  countryBox1.classList.remove("hide");
  countryBox2.classList.remove("hide");

  scoreOutput.classList.remove("hide");

  boxes.classList.remove("boxes-flex");
  boxes.classList.add("boxes-grid");

  score = 0;

  getCountries();

  next.classList.add("hide");
}

next.addEventListener("click", nextQuestion);

function nextQuestion() {
  getCountries();

  countryBox1.classList.remove("hide");
  countryBox2.classList.remove("hide");

  areaBox1.classList.add("hide");
  areaBox2.classList.add("hide");

  areaOutput1.classList.add("hide");
  areaOutput2.classList.add("hide");

  next.classList.add("hide");
}
