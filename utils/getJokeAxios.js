import axios from "axios";
import { cache } from "react";

const getJokeAxios = cache(async () => {
  return axios.get("https://api.chucknorris.io/jokes/random", {});
});
export default getJokeAxios;
