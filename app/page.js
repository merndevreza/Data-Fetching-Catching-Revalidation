import RandomJoke from "@/components/RandomJoke";
import getJoke from "@/utils/getJoke";
// import { cookies } from "next/headers";

export const revalidate = 10;

export default async function Home() {
  
  // const theme=cookies().get("theme")

  const joke = await getJoke();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h3 className="text-3xl">{joke.value}</h3>
      <RandomJoke/>
    </div>
  );
}
