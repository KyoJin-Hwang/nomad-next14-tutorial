export const metadata = {
  title: "Server Fetch Next14",
};

const URL = "https://v2.jokeapi.dev/joke/Any";
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(URL);
  const json = await res.json();
  return json;
}

// async 를 사용해야 하는 이유 : await 을 사용하고 싶기 때문에

const Server = async () => {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
};

export default Server;
