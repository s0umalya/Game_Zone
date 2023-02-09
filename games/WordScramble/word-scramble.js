const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
timerText = document.querySelector(".timer b");
refreshBtn = document.querySelector("#refresh-btn");
checkBtn = document.querySelector("#check-btn");
inputField = document.querySelector("input");

let correctWord, timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timerText.innerText = maxTime);
    }
    clearInterval(timer);
    alert("OOPS!!!! Time's Up!");
    initGame();
  }, 1000);
};

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)]; //Getting random object from words Array
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //Getting random numbers
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; //Swapping values
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLocaleLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  console.log(wordArray, randomObj.word);
};
initGame();

const checkWord = () => {
    initGame();
  let userWord = inputField.value.toLocaleLowerCase();
  console.log(userWord);
  if (!userWord) {
    return alert(`Please enter a word`);
  }
  if (userWord !== correctWord) {
    return alert(`${userWord.toLocaleUpperCase()} is not the correct answer!!!`);
  }
  alert(`Congratulations!!! ${userWord.toLocaleUpperCase()} is the correct answer.`);
  
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
