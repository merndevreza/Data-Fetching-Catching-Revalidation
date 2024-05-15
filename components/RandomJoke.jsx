import getJoke from "@/utils/getJoke";

const RandomJoke = async() => {
const joke = await getJoke()
   return (
      <div>
         {joke.value}
      </div>
   );
};

export default RandomJoke;