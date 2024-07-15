import { API_URL } from "../../../(fetch)/fetch/server/page";

async function getMovie(id: string) {
  console.log(`Fetching movie: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideos(id: string) {
  console.log(`Fetching video: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("==============");
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");
  return <h1>{movie.title}</h1>;
}
