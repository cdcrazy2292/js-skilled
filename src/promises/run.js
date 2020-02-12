/**
 * The purpose of this file is to run files via node assuming
 * there is no client side logic in them.
 *
 * ========>COMMANDS<===========
 * npm run check
 */

const { fetchFilms } = require("./fetchFilms");

fetchFilms();
