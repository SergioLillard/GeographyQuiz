const url =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,capital,cca2";

let countriesList = [];
try {
  const response = await fetch(url);
  const result = await response.json();

  countriesList = result;
} catch (error) {
  console.error(error);
}

console.log(countriesList);

const countryBox = document.getElementById("country-box");

const boxesQuestion = document.querySelectorAll(".question");

const cityBox1 = document.getElementById("city-box1");
const cityBox2 = document.getElementById("city-box2");
const cityBox3 = document.getElementById("city-box3");
const cityBox4 = document.getElementById("city-box4");

const boxesAnswer = document.querySelectorAll(".answer");

const cityBoxAnswer1 = document.getElementById("city-box-answer1");
const cityBoxAnswer2 = document.getElementById("city-box-answer2");
const cityBoxAnswer3 = document.getElementById("city-box-answer3");
const cityBoxAnswer4 = document.getElementById("city-box-answer4");

const flagBox = document.getElementById("flag-box");

const countryName = document.getElementById("country-name");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomCountry1;
let randomCountry2;
let randomCountry3;
let randomCountry4;

let city1;
let city2;
let city3;
let city4;

let cities = [];
let flag;
let flagSrc;

let countriesListPassed = [];

const southAfrica = countriesList.findIndex(
  (item) => item.name.common === "South Africa"
);

countriesList[southAfrica].capital = ["Pretoria"];

console.log(countriesList);

function find(needle, haystack) {
  let results = [];
  let index = haystack.indexOf(needle);
  while (index != -1) {
    results.push(index);
    index = haystack.indexOf(needle, index + 1);
  }
  return results;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getCities() {
  randomCountry1 = getRandomInt(countriesList.length);

  randomCountry2 = getRandomInt(countriesList.length);

  randomCountry3 = getRandomInt(countriesList.length);

  randomCountry4 = getRandomInt(countriesList.length);

  while (
    randomCountry2 === randomCountry1 ||
    randomCountry3 === randomCountry1 ||
    randomCountry3 === randomCountry2 ||
    randomCountry4 === randomCountry1 ||
    randomCountry4 === randomCountry2 ||
    randomCountry4 === randomCountry3
  ) {
    randomCountry1 = getRandomInt(countriesList.length);

    randomCountry2 = getRandomInt(countriesList.length);

    randomCountry3 = getRandomInt(countriesList.length);

    randomCountry4 = getRandomInt(countriesList.length);
  }

  flag = countriesList[randomCountry1].cca2.toLowerCase();

  flagSrc = "https://flagcdn.com/w320/" + flag + ".jpg";

  flagBox.src = flagSrc;

  countryName.innerHTML = countriesList[randomCountry1].name.common;

  city1 = countriesList[randomCountry1].capital[0];

  city2 = countriesList[randomCountry2].capital[0];

  city3 = countriesList[randomCountry3].capital[0];

  city4 = countriesList[randomCountry4].capital[0];

  if (countriesList[randomCountry1].name.common === "South Africa") {
    city1 = ["Pretoria"];
  }

  cities.push(city1, city2, city3, city4);
  console.log(cities);

  shuffle(cities);
  console.log(cities);

  cityBox1.innerHTML = cities[0];
  cityBox2.innerHTML = cities[1];
  cityBox3.innerHTML = cities[2];
  cityBox4.innerHTML = cities[3];

  cityBoxAnswer1.innerHTML = cities[0];
  cityBoxAnswer2.innerHTML = cities[1];
  cityBoxAnswer3.innerHTML = cities[2];
  cityBoxAnswer4.innerHTML = cities[3];
}

getCities();

const boxes = document.getElementById("boxes");

const next = document.getElementById("next");

const loseScreen = document.querySelector(".lose-screen");

const loseScreenScore = document.getElementById("lose-screen-score");

const loseScreenText = document.getElementById("lose-screen-text");

let scoreOutput = document.getElementById("score");

let score = 0;

function showLoseScreen() {
  console.log("You Lose");

  countryBox.classList.add("hide");

  loseScreen.classList.add("show");

  loseScreenScore.innerHTML = `Score: ${score}`;

  loseScreenText.innerHTML =
    "The capital city of " +
    countriesList[randomCountry1].name.common +
    " is " +
    countriesList[randomCountry1].capital;

  scoreOutput.classList.add("hide");

  boxesQuestion.forEach((box) => {
    box.classList.add("hide");
  });

  boxes.classList.remove("boxes-grid-small");
  boxes.classList.add("boxes-flex");
}

cityBox1.addEventListener("click", () => checkCities(1));

cityBox2.addEventListener("click", () => checkCities(2));

cityBox3.addEventListener("click", () => checkCities(3));

cityBox4.addEventListener("click", () => checkCities(4));

console.log(countriesList[randomCountry1].capital);

function checkCities(e) {
  console.log(e);
  if (e === 1) {
    if (cityBox1.innerHTML == countriesList[randomCountry1].capital) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      cityBoxAnswer1.classList.add("border-green");

      cityBoxAnswer2.classList.add("border-red");
      cityBoxAnswer3.classList.add("border-red");
      cityBoxAnswer4.classList.add("border-red");

      next.classList.remove("hide");

      countriesListPassed.push(countriesList[randomCountry1].name.common);
      console.log(countriesListPassed);
      console.log(
        countriesListPassed.includes(countriesList[randomCountry1].name.common)
      );
    } else {
      showLoseScreen();
    }
  } else if (e === 2) {
    if (cityBox2.innerHTML == countriesList[randomCountry1].capital) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      cityBoxAnswer2.classList.add("border-green");

      cityBoxAnswer1.classList.add("border-red");
      cityBoxAnswer3.classList.add("border-red");
      cityBoxAnswer4.classList.add("border-red");

      next.classList.remove("hide");

      countriesListPassed.push(countriesList[randomCountry1].name.common);
      console.log(countriesListPassed);
      console.log(
        countriesListPassed.includes(countriesList[randomCountry1].name.common)
      );
    } else {
      showLoseScreen();
    }
  } else if (e === 3) {
    if (cityBox3.innerHTML == countriesList[randomCountry1].capital) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      cityBoxAnswer3.classList.add("border-green");

      cityBoxAnswer1.classList.add("border-red");
      cityBoxAnswer2.classList.add("border-red");
      cityBoxAnswer4.classList.add("border-red");

      next.classList.remove("hide");

      countriesListPassed.push(countriesList[randomCountry1].name.common);
      console.log(countriesListPassed);
      console.log(
        countriesListPassed.includes(countriesList[randomCountry1].name.common)
      );
    } else {
      showLoseScreen();
    }
  } else if (e === 4) {
    if (cityBox4.innerHTML == countriesList[randomCountry1].capital) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      cityBoxAnswer4.classList.add("border-green");

      cityBoxAnswer1.classList.add("border-red");
      cityBoxAnswer2.classList.add("border-red");
      cityBoxAnswer3.classList.add("border-red");

      next.classList.remove("hide");

      countriesListPassed.push(countriesList[randomCountry1].name.common);
      console.log(countriesListPassed);
      console.log(
        countriesListPassed.includes(countriesList[randomCountry1].name.common)
      );
    } else {
      showLoseScreen();
    }
  }
}

const winnerScreen = document.querySelector(".winner-screen");

const resetButton1 = document.getElementById("reset-button1");
resetButton1.addEventListener("click", resetGame);

const resetButton2 = document.getElementById("reset-button2");
resetButton2.addEventListener("click", resetGame);

function resetGame() {
  scoreOutput.innerHTML = "SCORE:";

  countryBox.classList.remove("hide");

  loseScreen.classList.remove("show");
  winnerScreen.classList.remove("show");

  loseScreenScore.innerHTML = "Score:";

  boxesQuestion.forEach((box) => {
    box.classList.remove("hide");
  });

  scoreOutput.classList.remove("hide");

  boxes.classList.remove("boxes-flex");
  boxes.classList.add("boxes-grid-small");

  score = 0;

  cities = [];

  countriesListPassed = [];

  getCities();

  next.classList.add("hide");

  boxesAnswer.forEach((box) => {
    box.classList.add("hide");
    box.classList.remove("border-green");
    box.classList.remove("border-red");
  });
}

next.addEventListener("click", nextQuestion);

function nextQuestion() {
  randomCountry1 = getRandomInt(countriesList.length);

  randomCountry2 = getRandomInt(countriesList.length);

  randomCountry3 = getRandomInt(countriesList.length);

  randomCountry4 = getRandomInt(countriesList.length);

  while (
    randomCountry2 === randomCountry1 ||
    randomCountry3 === randomCountry1 ||
    randomCountry3 === randomCountry2 ||
    randomCountry4 === randomCountry1 ||
    randomCountry4 === randomCountry2 ||
    randomCountry4 === randomCountry3 ||
    countriesListPassed.includes(countriesList[randomCountry1].name.common)
  ) {
    console.log("Ima vec");
    randomCountry1 = getRandomInt(countriesList.length);

    randomCountry2 = getRandomInt(countriesList.length);

    randomCountry3 = getRandomInt(countriesList.length);

    randomCountry4 = getRandomInt(countriesList.length);

    if (countriesListPassed.length === countriesList.length) {
      break;
    }
  }

  let flag = countriesList[randomCountry1].cca2.toLowerCase();

  let flagSrc = "https://flagcdn.com/w320/" + flag + ".jpg";

  flagBox.src = flagSrc;

  countryName.innerHTML = countriesList[randomCountry1].name.common;

  let city1 = countriesList[randomCountry1].capital[0];

  let city2 = countriesList[randomCountry2].capital[0];

  let city3 = countriesList[randomCountry3].capital[0];

  let city4 = countriesList[randomCountry4].capital[0];

  if (countriesList[randomCountry1].name.common === "South Africa") {
    city1 = ["Pretoria"];
  }

  let cities = [];

  cities.push(city1, city2, city3, city4);
  console.log(cities);

  shuffle(cities);
  console.log(cities);

  cityBox1.innerHTML = cities[0];
  cityBox2.innerHTML = cities[1];
  cityBox3.innerHTML = cities[2];
  cityBox4.innerHTML = cities[3];

  cityBoxAnswer1.innerHTML = cities[0];
  cityBoxAnswer2.innerHTML = cities[1];
  cityBoxAnswer3.innerHTML = cities[2];
  cityBoxAnswer4.innerHTML = cities[3];

  boxesQuestion.forEach((box) => {
    box.classList.remove("hide");
  });

  boxesAnswer.forEach((box) => {
    box.classList.add("hide");
    box.classList.remove("border-green");
    box.classList.remove("border-red");
  });

  next.classList.add("hide");

  console.log(countriesListPassed);

  if (countriesListPassed.length == countriesList.length) {
    winnerScreen.classList.add("show");

    countryBox.classList.add("hide");

    scoreOutput.classList.add("hide");

    boxesQuestion.forEach((box) => {
      box.classList.add("hide");
    });

    boxes.classList.remove("boxes-grid-small");
    boxes.classList.add("boxes-flex");
  }
}
