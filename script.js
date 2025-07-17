// declearing the variables
const loading = document.getElementById("loading");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const button = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
// making getQuote function
async function getQuote() {
  // disable the button
  button.disabled = true;
  // show loader
  loading.style.display = "block";
  quoteEl.innerText = "";
  authorEl.innerText = "";

  setTimeout(async () => {
    // fetching the quote
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      var data = await response.json();
      console.log(data);

      // displaying the quote
      quoteEl.innerText = `${data.quote}`;
      authorEl.innerText = `-${data.author}`;
    } catch (error) {
      quoteEl.innerText = "failed to load Quote";
      console.error(error);
    } finally {
      loading.style.display = "none";
      button.disabled = false;
    }
    console.log(data);
  }, 500);
}

button.addEventListener("click", getQuote);

// copying the code function
copyButton.addEventListener("click", () => {
  quoteText = document.getElementById("quote").innerText;
  const authorText = document.getElementById("author").innerText;
  const fullQuote = `${quoteText} ${authorText}`;

  //   copying the quote to the clipBoard
  navigator.clipboard
    .writeText(fullQuote)
    .then(() => {
      alert("Quote is Copied to clipborad!");
    })
    .catch((err) => {
      console.log("Quote is not sopied to the clipboard..", err);
    });
});
