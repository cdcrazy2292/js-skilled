/**
 * This file can't be run through node because we are using
 * server side functions such as document
 *
 * =======>IMPORTANT<============
 * assuming you have installed browserify globally
 * run browserify index.js > bundle.js. This will
 * enable the html file to work correctly.
 *
 */
const { fetchFilms } = require("./fetchFilms");
const output = document.getElementById("output");

output.innerText = "Loading...";

fetchFilms().then(filmTitles => {
  console.log("filmTitles", filmTitles);
  output.innerText = filmTitles;
});
