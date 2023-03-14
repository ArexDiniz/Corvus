import axios from "axios";

const igdbInfos = {
  baseUrl: "https://api.igdb.com/v4",
  clientId: "syd3355ewd1dynx23q0ol52awj93e3",
  accessToken: "ugu98icpfs257thvs28ou84o6cfd34",
  expiresIn: 4907575,
  tokenTtype: "Bearer",
};

function useGames() {
  // factory design pattern

  async function getGames() {
    const options = {
      method: "POST",
      headers: {
        "Client-ID": "syd3355ewd1dynx23q0ol52awj93e3",
        Authorization: "Bearer ugu98icpfs257thvs28ou84o6cfd34",
        "Access-Control-Allow-Origin": "*",
      },
      body: "fields *;",
    };

    fetch("https://api.igdb.com/v4/games", options)
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.error(err));
  }

  return { getGames };
}

export default useGames;
