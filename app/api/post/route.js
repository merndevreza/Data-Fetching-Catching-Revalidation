import getJoke from "@/utils/getJoke";


// export const dynamic = "force-dynamic";

export async function GET(request) {
  const posts = await getJoke();
  return Response.json(posts);
}

/**
 * In Route handlers, fetch requests are not memoized as Route Handlers are not part of the React component tree.
 *
 * But here it seems like, it has been memoized, But actually the fetch is not memoized, the GET request is memoized.
 *
 * Here we can avoid the GET request memoization, by force-dynamic
 */
