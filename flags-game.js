const url =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,cca2";

let countriesList = [];

try {
  const response = await fetch(url);
  const result = await response.json();

  countriesList = result;
} catch (error) {
  console.error(error);
}

const countryBox = document.getElementById("country-box");

const boxesQuestion = document.querySelectorAll(".question");

const flagBox1 = document.getElementById("flag-box1");
const flagBox2 = document.getElementById("flag-box2");
const flagBox3 = document.getElementById("flag-box3");
const flagBox4 = document.getElementById("flag-box4");

const boxesAnswer = document.querySelectorAll(".answer");

const flagBoxAnswer1 = document.getElementById("flag-box-answer1");
const flagBoxAnswer2 = document.getElementById("flag-box-answer2");
const flagBoxAnswer3 = document.getElementById("flag-box-answer3");
const flagBoxAnswer4 = document.getElementById("flag-box-answer4");

const flagOutput1 = document.getElementById("flag1");
const flagOutput2 = document.getElementById("flag2");
const flagOutput3 = document.getElementById("flag3");
const flagOutput4 = document.getElementById("flag4");

const flagAnswerOutput1 = document.getElementById("flagAnswer1");
const flagAnswerOutput2 = document.getElementById("flagAnswer2");
const flagAnswerOutput3 = document.getElementById("flagAnswer3");
const flagAnswerOutput4 = document.getElementById("flagAnswer4");

const countryName = document.getElementById("country-name");

let countryCca2;

let flag1;
let flag2;
let flag3;
let flag4;

let countriesListPassed = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomCountry1;
let randomCountry2;
let randomCountry3;
let randomCountry4;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getFlags() {
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
  countryName.innerHTML = countriesList[randomCountry1].name.common;

  countryCca2 = countriesList[randomCountry1].cca2.toLowerCase();

  let country1cca2 = countriesList[randomCountry1].cca2;

  let country2cca2 = countriesList[randomCountry2].cca2;

  let country3cca2 = countriesList[randomCountry3].cca2;

  let country4cca2 = countriesList[randomCountry4].cca2;

  let cca2Array = [];

  cca2Array.push(country1cca2, country2cca2, country3cca2, country4cca2);

  shuffle(cca2Array);

  flag1 = cca2Array[0].toLowerCase();
  let flagSrc1 = "https://flagcdn.com/w320/" + flag1 + ".jpg";
  flagOutput1.src = flagSrc1;
  flagAnswerOutput1.src = flagSrc1;

  flag2 = cca2Array[1].toLowerCase();
  let flagSrc2 = "https://flagcdn.com/w320/" + flag2 + ".jpg";
  flagOutput2.src = flagSrc2;
  flagAnswerOutput2.src = flagSrc2;

  flag3 = cca2Array[2].toLowerCase();
  let flagSrc3 = "https://flagcdn.com/w320/" + flag3 + ".jpg";
  flagOutput3.src = flagSrc3;
  flagAnswerOutput3.src = flagSrc3;

  flag4 = cca2Array[3].toLowerCase();
  let flagSrc4 = "https://flagcdn.com/w320/" + flag4 + ".jpg";
  flagOutput4.src = flagSrc4;
  flagAnswerOutput4.src = flagSrc4;
}

getFlags();

const boxes = document.getElementById("boxes");

const next = document.getElementById("next");

const loseScreen = document.querySelector(".lose-screen");

const loseScreenScore = document.getElementById("lose-screen-score");

const loseScreenText = document.getElementById("lose-screen-text");

const loseScreenFlag = document.getElementById("lose-screen-flag");

let scoreOutput = document.getElementById("score");

let score = 0;

function showLoseScreen() {
  console.log("You Lose");

  countryBox.classList.add("hide");

  loseScreen.classList.add("show");

  loseScreenScore.innerHTML = `Score: ${score}`;

  let flagSrc = "https://flagcdn.com/w320/" + countryCca2 + ".jpg";

  loseScreenFlag.src = flagSrc;

  loseScreenText.innerHTML =
    "The flag of " + countriesList[randomCountry1].name.common + " is ";

  scoreOutput.classList.add("hide");

  boxesQuestion.forEach((box) => {
    box.classList.add("hide");
  });

  boxes.classList.remove("boxes-grid-small");
  boxes.classList.add("boxes-flex");
}

flagBox1.addEventListener("click", () => checkFlags(1));

flagBox2.addEventListener("click", () => checkFlags(2));

flagBox3.addEventListener("click", () => checkFlags(3));

flagBox4.addEventListener("click", () => checkFlags(4));

function checkFlags(e) {
  console.log(e);
  if (e === 1) {
    if (flag1 === countryCca2) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      flagBoxAnswer1.classList.add("border-green");

      flagBoxAnswer2.classList.add("border-red");
      flagBoxAnswer3.classList.add("border-red");
      flagBoxAnswer4.classList.add("border-red");

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
    if (flag2 === countryCca2) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      flagBoxAnswer2.classList.add("border-green");

      flagBoxAnswer1.classList.add("border-red");
      flagBoxAnswer3.classList.add("border-red");
      flagBoxAnswer4.classList.add("border-red");

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
    if (flag3 === countryCca2) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      flagBoxAnswer3.classList.add("border-green");

      flagBoxAnswer1.classList.add("border-red");
      flagBoxAnswer2.classList.add("border-red");
      flagBoxAnswer4.classList.add("border-red");

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
    if (flag4 === countryCca2) {
      score++;
      scoreOutput.innerHTML = `SCORE: ${score}`;
      console.log("WINNER");

      boxesQuestion.forEach((box) => {
        box.classList.add("hide");
      });

      boxesAnswer.forEach((box) => {
        box.classList.remove("hide");
      });

      flagBoxAnswer4.classList.add("border-green");

      flagBoxAnswer1.classList.add("border-red");
      flagBoxAnswer2.classList.add("border-red");
      flagBoxAnswer3.classList.add("border-red");

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

  countriesListPassed = [];

  next.classList.add("hide");

  boxesAnswer.forEach((box) => {
    box.classList.add("hide");
    box.classList.remove("border-green");
    box.classList.remove("border-red");
  });

  getFlags();
}

next.addEventListener("click", nextQuestion);

function nextQuestion() {
  randomCountry1 = getRandomInt(countriesList.length);

  randomCountry2 = getRandomInt(countriesList.length);

  randomCountry3 = getRandomInt(countriesList.length);

  randomCountry4 = getRandomInt(countriesList.length);

  console.log(countriesList[randomCountry1].name.common);
  console.log(
    countriesListPassed.includes(countriesList[randomCountry1].name.common)
  );

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

  console.log(countriesList[randomCountry1].name.common);

  countryName.innerHTML = countriesList[randomCountry1].name.common;

  countryCca2 = countriesList[randomCountry1].cca2.toLowerCase();

  let country1cca2 = countriesList[randomCountry1].cca2;

  let country2cca2 = countriesList[randomCountry2].cca2;

  let country3cca2 = countriesList[randomCountry3].cca2;

  let country4cca2 = countriesList[randomCountry4].cca2;

  let cca2Array = [];

  cca2Array.push(country1cca2, country3cca2, country2cca2, country4cca2);

  shuffle(cca2Array);

  flag1 = cca2Array[0].toLowerCase();
  let flagSrc1 = "https://flagcdn.com/w320/" + flag1 + ".jpg";
  flagOutput1.src = flagSrc1;
  flagAnswerOutput1.src = flagSrc1;

  flag2 = cca2Array[1].toLowerCase();
  let flagSrc2 = "https://flagcdn.com/w320/" + flag2 + ".jpg";
  flagOutput2.src = flagSrc2;
  flagAnswerOutput2.src = flagSrc2;

  flag3 = cca2Array[2].toLowerCase();
  let flagSrc3 = "https://flagcdn.com/w320/" + flag3 + ".jpg";
  flagOutput3.src = flagSrc3;
  flagAnswerOutput3.src = flagSrc3;

  flag4 = cca2Array[3].toLowerCase();
  let flagSrc4 = "https://flagcdn.com/w320/" + flag4 + ".jpg";
  flagOutput4.src = flagSrc4;
  flagAnswerOutput4.src = flagSrc4;

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
