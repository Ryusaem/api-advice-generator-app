const quote = document.querySelector(".quote");
const adviceId = document.querySelector("#advice-id");

async function getQuote() {
  //   const response = await fetch("https://api.adviceslip.com/advice");
  const response = await fetch(
    `https://api.adviceslip.com/advice?t=${new Date().getTime()}`
  );
  const data = await response.json();

  quote.innerHTML = data.slip.advice;
  adviceId.innerHTML = data.slip.id;
}

getQuote();
