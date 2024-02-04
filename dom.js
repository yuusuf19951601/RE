"strict mode";

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"al amdulillah robil aalami"`,
    person: `oladimeji Babatunde`,
  },
  {
    quote: `"Abdulfattah"`,
    person: `Islamic affairs Cordinator`,
  },
  {
    quote: `"Olayeni AbdulWaasih"`,
    person: `Faculty cordinator`,
  },
  {
    quote: `"Olayeni AbdulWaasih"`,
    person: `Faculty cordinator`,
  },
  {
    quote: `"al amdulillah robil aalami"`,
    person: `oladimeji Babatunde`,
  },
  {
    quote: `"Abdulfattah"`,
    person: `Islamic affairs Cordinator`,
  },
  {
    quote: `"Olayeni AbdulWaasih"`,
    person: `Faculty cordinator`,
  },
  {
    quote: `"Olayeni AbdulWaasih"`,
    person: `Faculty cordinator`,
  },
  {
    quote: `"al amdulillah robil aalami"`,
    person: `oladimeji Babatunde`,
  },
  {
    quote: `"Abdulfattah"`,
    person: `Islamic affairs Cordinator`,
  },
  {
    quote: `"Olayeni AbdulWaasih"`,
    person: `Faculty cordinator`,
  },
  {
    quote: `"Olayeni AbdulWaasih"`,
    person: `Faculty cordinator`,
  },
];

btn.addEventListener("click", function () {
  /* let random = Math.floor(Math.random() * quotes.lenght);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;*/

  quote.textContent = "The faculty Cordinator";
  person.textContent = "Abdulwaasih Olayeni";

  btn.addEventListener("click", function () {
    btn.addEventListener("click", function () {
      btn.addEventListener("click", function () {
        quote.textContent = "The sister Cordinator";
        person.textContent = "Sister Waliyyah ";
      });
      quote.textContent = "General Secretary";
      person.textContent = "Dairo Sherifdeen ";
    });
    quote.textContent = "The  Director Of Islamic Affairs";
    person.textContent = "AbdulFattah Yuusuf ";
  });
});
