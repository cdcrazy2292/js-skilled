const fetch = require("node-fetch");

class GithubClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

// IFFE function to call right away
(async () => {
  const client = new GithubClient();
  const user = await client.fetchUser("cdcrazy2292");
  console.log(user.name);
  console.log(user.location);
})();
