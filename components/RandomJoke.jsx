import getJokeAxios from "@/utils/getJokeAxios";

const RandomJoke = async() => {
const joke = await getJokeAxios()
   return (
      <div>
         {joke.data.value}
      </div>
   );
};

export default RandomJoke;