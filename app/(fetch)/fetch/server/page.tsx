import Link from "next/link";

export const metadata = {
  title: "Server Fetch Next14",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  // 로딩 시간 만들어주기
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

// async 를 사용해야 하는 이유 : await 을 사용하고 싶기 때문에

const Server = async () => {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Server;
