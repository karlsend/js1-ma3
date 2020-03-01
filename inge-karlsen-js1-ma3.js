/*QUESTION: 1 Convert the function below to an arrow function:
function(a, b) {
    return a - b;
}
*/

function(a,b) => a - b;

/* QUESTION: 2 Make a call to the URL below, pass the JSON it returns to a
function and inside that function loop through the results and log each game's name.
In the catch method of your code, redirect to error.html if there is an error.
https://api.rawg.io/api/games?genres=sports */

const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl)
  .then(function(response) {
    return response.json();
})
  .then(function(json) {
  getGamesName(json);
})
.catch(function() {
  const redirectToErrorPage = "error.html";
  document.location.href = redirectToErrorPage;
});

const getGamesName = jsonFetch => {
for (let i = 0; i < jsonFetch.results.length; i++) {
  console.log(jsonFetch.results[i].name);
}
};

/* QUESTION: 3
Replace the word cats with the word giraffes in the following sentence:
These cats are outrageous.*/

let change = "These cats are outrageous."
const replace = change.replace("cats", "giraffes");

/* QUESTION: 4
Given the URL below, write code that checks if there is a userId parameter in the query string.
If there is no userID parameter, redirect the browser to third.html.
If there is a userID parameter and its value is less than 10, redirect to first.html.
If there is a userID parameter and its value is 10 or greater, redirect to second.html.
https://my.site.com?userId=7 */

??

/* QUESTION: 5
Write code that removes the button, and only the button,
from its parent element in the HTML below:
<div class="container">
    <p>Lorem ipsum dolor</p>
    <button class="btn">Click me</button>
</div>
*/

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

/* QUESTION: 6
Create an li element with a text value of Parrots and a class of parrots.
Add the new item as the second item in the ul below (add it after Cows).
<ul class="animals">
    <li class="cows">Cows</li>
    <li class="elephants">Elephants</li>
</ul>
*/

const animals = document.querySelector(".animals");
const cows = document.querySelector(".cows");
const parrot = document.createElement("li");

parrot.className = "parrots";
parrot.innerText = "Parrots";
animals.appendChild(parrot);
parrot.after(cows);

/* QUESTION: 7
Make a call to the URL below and pass the JSON it returns to a function.
Inside that function select the div from the HTML below and assign the rating
property from the JSON object as it's text value.
In the catch method, log the error that may be returned.
https://api.rawg.io/api/games/3801
<div class="rating"></div>
*/
???
