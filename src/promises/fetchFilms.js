const fetch = require("node-fetch");

const API_URL = "http://starwars.egghead.training/";

const getFilmTitles = films => {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join("\n");
};

const fetchFilms = () => {
  return fetch(API_URL + "films")
    .then(res => res.json())
    .then(films => getFilmTitles(films));
};

module.exports = {
  fetchFilms: fetchFilms
};
