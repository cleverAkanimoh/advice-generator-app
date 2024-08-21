const quote = document.getElementById("quote");
const quoteId = document.getElementById("quote-id");

const getAdvice = async () => {
  const apiUrl = "https://api.adviceslip.com/advic";

  try {
    const response = await fetch(apiUrl);

    const { slip } = await response.json();
    quote.textContent = slip.advice;
    quoteId.textContent = slip.id;
  } catch (error) {
    quote.textContent = "Something went wrong contact your service provider";
    quoteId.textContent = "--";
  }

  console.log(slip);
};

getAdvice();
